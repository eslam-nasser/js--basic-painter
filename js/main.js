// Global Vars
var toggleToolsButton = document.getElementsByClassName('toggle-tools')[0];
var tools = document.getElementsByClassName('tools')[0];
var mouse = document.getElementById('mouse');


toggleToolsButton.addEventListener('click', function () {
    tools.classList.add('open');
});


// Step #1: Handle select single tool
var toolsButtons = document.querySelectorAll('.single-tool');
for (var i = 0; i < toolsButtons.length; i++) {
    toolsButtons[i].addEventListener('click', function () {
        var src = this.children[0].src;
        // Step #3: Change #mouse background on click to the src var
        mouse.style.backgroundImage = `url('${src}')`;
    });
}



// Step #2: Track mouse location and add sample
window.addEventListener('mousemove', function (moveDetails) {
    var x = moveDetails.clientX;
    var y = moveDetails.clientY;

    mouse.style.top = y + 'px';
    mouse.style.left = x + 'px';
});


// Step #2: Track mouse location and add sample
var spaceLayer = document.getElementsByClassName('spacetime')[0];
spaceLayer.addEventListener('click', function (moveDetails) {
    var x = moveDetails.clientX;
    var y = moveDetails.clientY;

    var clone = document.createElement('div');
    clone.classList.add('clone');
    clone.style.backgroundImage = mouse.style.backgroundImage

    clone.style.top = y + 'px';
    clone.style.left = x + 'px';

    document.body.appendChild(clone);
})

/*

    1- on window click, clone #mouse
    2- clone append on the click x and y

*/