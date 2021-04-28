// INDEX IMAGE FLIPPER

const rightArrow = document.getElementsByClassName("fa-chevron-right");
const leftArrow = document.getElementsByClassName("fa-chevron-left");
const imgRowBg = document.getElementById("image-row");
// const menuCircle = document.getElementById("menuCircle");

let counter = 1;
function displayImgLeft() {
  counter++;
  if (counter <= 4) {
    imgRowBg.classList.add("bgImg" + counter);
    imgRowBg.classList.remove("bgImg" + (counter - 1));
  } else {
    imgRowBg.classList.remove("bgImg" + (counter - 1));
    counter = 1;
    imgRowBg.classList.add("bgImg" + counter);
  }
}

function displayImgRight() {
  counter--;
  if (counter <= 4 && counter > 0) {
    imgRowBg.classList.add("bgImg" + counter);
    imgRowBg.classList.remove("bgImg" + (counter + 1));
  } else {
    imgRowBg.classList.remove("bgImg" + (counter + 1));
    counter = 4;
    imgRowBg.classList.add("bgImg" + counter);
  }
}

// END OF INDEX IMAGE FLIPPER

// GALLERY PAGE JS
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".photo");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

//END GALLERY PAGE JS
