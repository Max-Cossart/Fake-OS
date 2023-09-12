const addElemWithText = (elementType, text, parent) => {
  const newElement = document.createElement(elementType);
  const textNode = document.createTextNode(text);
  newElement.appendChild(textNode);
  parent.appendChild(newElement);
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  const inputValue = input.value.trim();

  if (!inputValue) {
    alert("Empty Tasks Can't Be Added");
    return;
  }

  const taskList = document.querySelector("#tasks");
  addElemWithText("p", inputValue, taskList);

  input.value = "";
  const nothingPara = document.querySelector("#nothingPara");
  if (nothingPara) {
    taskList.removeChild(nothingPara);
  }
});
