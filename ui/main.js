console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'Prabunarayanan Welcomes you to hasura';

//move the image
var img = document.getElementById('hasuran');
img.onclick = function () {
    img.style.marginLeft = '100px';
    };