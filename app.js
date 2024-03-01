let tasks = {};

updateItems();

// New comment

let counter = 1;

function show() {
  let inputText = document.getElementById("inputText");
  let inputDate = document.getElementById("inputDate");

  //   inputText = inputText.value;
  //   inputDate = inputDate.value;

  if (inputText.value != "" && inputDate.value != "") {
    tasks[counter++] = { task: inputText.value, date: inputDate.value };
    updateItems();
  }

  console.log(counter);
  console.log(inputText.value);
  console.log(tasks);
  console.log(inputDate.value);

  // for (let key in tasks) {
  //   console.log(`Key: ${key}`);
  //   console.log(`Value:`, tasks[key]);
  //   console.log(`Value:`, tasks[key].task);
  //   console.log(`Value:`, tasks[key].date);
  // }

  inputText.value = "";
  inputDate.value = "";
}

function updateItems() {
  let displayElement = document.querySelector(".tasks");

  let newHtml = "";

  for (let key in tasks) {
    newHtml += `
    <div class="task">
    <span>${key}</span>
    <span>${tasks[key].task}</span>
    <span>${tasks[key].date}</span>
    <button class="btn" onClick="deleteTask()">X</button>
    </div>
    `;

    console.log("Done");
  }
  displayElement.innerHTML = newHtml;
}

function deleteTask() {
  let getBtn = document.querySelectorAll(".tasks");

  getBtn.forEach((arg) => {
    arg.addEventListener("click", (e) => {
      let rmv =
        e.target.previousElementSibling.previousElementSibling
          .previousElementSibling;

      let rm = rmv.innerText;
      delete tasks[rm];

      let removeIt =
        e.target.previousElementSibling.previousElementSibling
          .previousElementSibling.parentNode;
      removeIt.remove();
    });
  });
}
