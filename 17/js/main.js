var i = 0; // Start point
var images = [];
var time = 3000;

// Image List
images[0] = 'img/image1.jpg';
images[1] = 'img/image2.jpg';
images[2] = 'img/image3.jpg';
images[3] = 'img/image4.jpg';

// Change Image
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;