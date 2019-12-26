function addMethods() {
    $('.cards .fa-trash').click(function() {
    let x =this.parentNode.parentNode
    x.remove();
});
}  