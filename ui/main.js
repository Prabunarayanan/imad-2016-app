console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'Prabunarayanan Welcomes you to hasura Kingdom. \n This page is under construction. ';

//move the image
var img = document.getElementById('hasuran');
var marginLeft = 0;
function moveRight(){
               imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
               animate = setTimeout(moveRight,20); // call moveRight in 20msec
            }
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
    };