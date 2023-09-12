const nextBtn = document.getElementById("carouselBtnNext");
const PrevBtn = document.getElementById("carouselBtnPrev");
const img = document.getElementById("sliderImg");

let picsArr = [
  "./assets/Elephant.jpg",
  "./assets/Fox.jpg",
  "./assets/lion.jpg",
  "./assets/Tiger.jpg",
  "./assets/Bear.jpg",
];

img.src = `${picsArr[0]}`;
let i = 0;

nextBtn.addEventListener("click", (e) => {
  i++;
  if (i > picsArr.length - 1) {
    i = 0;
  }
  img.src = `${picsArr[i]}`;
});

PrevBtn.addEventListener("click", (e) => {
  i--;
  if (i < 0) {
    i = picsArr.length - 1;
  }
  img.src = `${picsArr[i]}`;
});
