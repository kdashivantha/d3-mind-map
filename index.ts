import { MindMap } from './mindmap';
import map from "./data/mapdata";

function init() {
    let data = {...map};
    let svgEl = document.getElementById("map");
    
    let mindmap = new MindMap(svgEl,data);
    mindmap.renderMap();
}
init();