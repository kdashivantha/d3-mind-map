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

  return `<div class="node-body" style="height:100px;width:250px;">
  <div class="options">
    <div class="option add-item"><i class="fas fa-plus-circle"></i></div>
    <div class="option edit-item"><i class="fas fa-pencil-alt"></i></div>
    <div class="option remove-item"><i class="fas fa-trash-alt"></i></div>
  </div>
  <a id="node-${node.index}" ${href}>${node.text || ''} ${emoji}</a></div>`;
}