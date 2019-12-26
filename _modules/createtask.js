document.getElementById('add-todo-btn').onclick = function() {
    let newval = document.getElementById('add-todo').value;
    let createNode = buildCardNode(newval);
    document.getElementById('todo-board').append(createNode);
    addMethods();
    dragDrop();
};


function buildCardNode(newval) {
    var node = document.createElement('div')
    node.draggable = true
    node.innerHTML =
        `<li class="cards"> ${newval} <span> <i class="fa fa-edit"></i> <i class="fa fa-trash"></i></span></li>`;
    
    return node;
}