//import { categoryToIMG } from '../parser/emojis'

/*
 * Return the HTML representation of a node.
 * The node is an object that has text, url, and category attributes
 * all of them optional.
 */
export default (node) => {
  let href = `href="${node.url}"`
  let emoji = '';//categoryToIMG(node.category)

  // If url is not specified remove the emoji and the href attribute,
  // so that the node isn't clickable, and the user can see that without
  // having to hover the node.
  if (!node.url) {
    href = ''
    emoji = ''
  }

  return `<div style="height:100px;width:250px;background-color:#FFF;border:4px solid yellow;border-radius: 15px;padding: 20px;"><div class="options">add, remove</div><a id="node-${node.index}" ${href}>${node.text || ''} ${emoji}</a></div>`;
}