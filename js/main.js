// Open and close tools
var toggleToolsButton = document.getElementsByClassName('toggle-tools')[0];
var tools = document.getElementsByClassName('tools')[0];

toggleToolsButton.addEventListener('click', function () {
    tools.classList.add('open');
});


// Step #1: Handle select single tool
var selectedTool;

var toolsButtons = document.querySelectorAll('.single-tool');
for (var i = 0; i < toolsButtons.length; i++) {
    toolsButtons[i].addEventListener('click', function () {
        var src = this.children[0].src;
        selectedTool = src;
    });
}








/*
    1- 

*/