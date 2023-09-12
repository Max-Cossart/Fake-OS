// App buttons
const calc = document.querySelector("#calc");
const carousel = document.querySelector("#carousel");
const ToDoList = document.querySelector("#toDoList");

// Apps
const calcApp = document.querySelector(".calculator");
const carouselApp = document.querySelector(".img__carousel");
const ToDoListApp = document.querySelector(".todo-list");

// Close Buttons
const calcClose = document.querySelector("#closeBtnCalc");
const carouselClose = document.querySelector("#closeBtnCarousel");
const ToDoListClose = document.querySelector("#closeBtnToDo");

calc.addEventListener("click", (e) => {
  calcApp.classList.toggle("hide-app");
});

carousel.addEventListener("click", (e) => {
  carouselApp.classList.toggle("hide-app");
});

ToDoList.addEventListener("click", (e) => {
  ToDoListApp.classList.toggle("hide-app");
});

carouselClose.addEventListener("click", (e) => {
  carouselApp.classList.add("hide-app");
});

calcClose.addEventListener("click", (e) => {
  calcApp.classList.add("hide-app");
});

ToDoListClose.addEventListener("click", (e) => {
  ToDoListApp.classList.add("hide-app");
});
