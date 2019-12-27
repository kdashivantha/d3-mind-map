import { MindMap } from './mindmap';
import map from "./data/mapdata";

function init() {
    let data = {...map};
    let svgEl = document.getElementsByClassName("mindmap-svg")[0];
    
    let mindmap = new MindMap(svgEl,data);
    mindmap.renderMap();
}
init();