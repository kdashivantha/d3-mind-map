import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  select
} from "d3";
import {
  d3Connections,
  d3Nodes,
  d3Drag,
  d3PanZoom,
  onTick,
  d3NodeClick
} from "./utils/d3";

import uuidv4 from "uuid";

import { getDimensions, getViewBox } from "./utils/dimensions";
import nodeToHTML from "./nodeTemplates/nodeToHTML";

export class MindMap {
  mapEl: any;
  nodes: any[] = [];
  connections: any[] = [];
  editable: boolean = true;
  simulation = null;
  svg: any = {};

  addOption = null;
  removeOption = null;
  editOption = null;

  /**
   *
   */
  constructor(svgEl: any, data: any) {
    this.nodes = data.nodes;
    this.connections = data.connections;
    this.svg = svgEl;
  }

  // methods
  prepareNodes() {
    const render = node => {
      node.uid = uuidv4();
      node.html = nodeToHTML(node);

      const dimensions = getDimensions(node.html, {}, "mindmap-node");
      //@ts-ignore
      node.width = dimensions.width;
      //@ts-ignore
      node.height = dimensions.height;
    };

    this.nodes.forEach(node => render(node));
  }

  /**
   * Add new class to nodes, attach drag behevior,
   * and start simulation.
   */
  prepareEditor(svg, conns, nodes) {
    nodes
      .attr("class", "mindmap-node mindmap-node--editable")
      .attr("id", d => d.uid)
      .on("dbclick", node => {
        node.fx = null;
        node.fy = null;
      });

    nodes.call(d3Drag(this.simulation, svg, nodes));
    nodes.on("click", (d, i) => {
      this.nodeClickEvent(d3NodeClick(d, i), d);
    });

    // Tick the simulation 100 times
    for (let i = 0; i < 100; i += 1) {
      this.simulation.tick();
    }

    setTimeout(() => {
      this.simulation.alphaTarget(0.5).on("tick", () => onTick(conns, nodes));
    }, 200);
  }

  /**
   * Render mind map unsing D3
   */
  renderMap() {
    // Create force simulation to position nodes that have
    // no coordinate, and add it to the component state
    this.simulation = forceSimulation()
      .force(
        "link",
        forceLink().id(node => (node as any).id)
      )
      .force("charge", forceManyBody())
      .force("collide", forceCollide().radius(200));

    const svg = select(this.svg);

    // Clear the SVG in case there's stuff already there.
    svg.selectAll("*").remove();

    // Add subnode group
    svg.append("g").attr("id", "mindmap-subnodes");

    this.prepareNodes();

    // Bind data to SVG elements and set all the properties to render them
    const connections = d3Connections(svg, this.connections);
    const { nodes } = d3Nodes(svg, this.nodes);

    nodes.append("title").text(node => node.uid);

    // Bind nodes and connections to the simulation
    this.simulation
      .nodes(this.nodes)
      .force("link")
      .links(this.connections);

    if (this.editable) {
      this.prepareEditor(svg, connections, nodes);
    }

    // Tick the simulation 100 times
    for (let i = 0; i < 100; i += 1) {
      this.simulation.tick();
    }

    onTick(connections, nodes);

    svg
      .attr("viewBox", getViewBox(nodes.data()))
      .call(d3PanZoom(svg))
      .on("dbClick.zoom", null);
  }

  /**
   * node mouse click events
   */
  nodeClickEvent(event, node) {
    switch (event) {
      case "add":
        this.addNewNode(node);
        break;
      case "edit":
        this.editNode(node);
        break;
      case "remove":
        this.removeNode(node);
        break;
      case "click":
        this.clickNode(node);
        break;
    }
  }

  /**
   * click on node text
   */
  clickNode(d) {
    alert(`node clicked ;) ==> ${d.text}`);
  }
  /**
   * add new child nodes
   */
  addNewNode(target) {
    const nodeId = uuidv4();
    this.nodes.push({
      id: nodeId,
      text: "new-node",
      fx: target.fx,
      fy: target.fy + 200
    });
    this.connections.push({
      source: target.id,
      target: nodeId
    });
    this.renderMap();
  }
  /**
   * remove a node
   * todo: before remove nodes check all link
   */
  removeNode(d) {
    alert(`node remove clicked ;) ==> ${d.text}`);
  }
  /**
   * edit node text
   */
  editNode(d) {
    var nodeTitle = prompt("node text", d.text);
    if (nodeTitle != null) {
      d.text = nodeTitle;
      this.renderMap();
    }
  }
}
