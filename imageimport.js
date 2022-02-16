var imageExists = true;
var imageNotExists = false;

var img;
var i = 1;

var myInterval = setInterval(loadImage, 1);

function loadImage() {

    if (imageNotExists) {
        clearInterval(myInterval);
        return;
    }

    if (imageExists) {

        imageExists = false;

        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = 'image/analogjpg/analog-' + i + '.jpg';

    }

}

function fExists() {
    var imgTag = document.createElement("img");
    imgTag.src = img;
    var src = document.getElementById("analog-grid");
    src.appendChild(img);


    i++;
    imageExists = true;
}

function fDoesntExist() {
    imageNotExists = true;
}