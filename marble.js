var images = document.querySelectorAll("#image");
var intervalAnimation = null;
var currImage = 0;

// console.log(images.length);

function startMarbleAnimation() {
  intervalAnimation = setInterval(function () {
    for (var i = 0; i < images.length; i++) {
      images[i].src = "/Images/marble1.jpg";
    }
    images[currImage].src = "/Images/marble3.jpg";
    // console.log(currImage);
    currImage++;
    if (currImage >= images.length) {
      currImage = 0;
    }
  }, 500);
}

function stopMarbleAnimation() {
  clearInterval(intervalAnimation);
  intervalAnimation = null;
}

window.onload = startMarbleAnimation;
