
/*
 * Return the HTML representation of a node.
 */
export default (node) => {
  return `
  <div class="node-body">
    <div class="options">
      <div class="option add-item"><i class="fas fa-plus-circle"></i></div>
      <div class="option edit-item"><i class="fas fa-pencil-alt"></i></div>
      <div class="option remove-item"><i class="fas fa-trash-alt"></i></div>
    </div>
    <a id="node-${node.id}" class="node-text">${node.text || ''}</a>
  </div>`;
}