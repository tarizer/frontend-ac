/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */

const submitButton = document.querySelector("#submit");
const colorPicker = document.querySelector("#colorPicker");
let bgcolor = colorPicker.value;

submitButton.addEventListener("click", e => {
  const inputHeight = document.querySelector("#inputHeight").value;
  const inputWidth = document.querySelector("#inputWidth").value;
  e.preventDefault();
  makeGrid(inputHeight, inputWidth);
});

colorPicker.addEventListener("change", () => {
  // Pick up the new color from the color picker
  bgcolor = colorPicker.value;
  // console.log(bgcolor);
});

function makeGrid(height, width) {
  // console.log(`Height: ${height}\nWidth: ${width}`);
  const table = document.querySelector("#pixelCanvas");
  const tbody = document.createElement("tbody");

  if (table.hasChildNodes()) {
    table.firstElementChild.remove(); // Removes tbody and all its children
    // table.innerHTML = ""; :)
    // console.log("Table has children, there were removed!");
  }
  table.appendChild(tbody);
  tbody.addEventListener("click", e => {
    // Listen to tbody and change the background of the clicked element (<td>) -> avoid having multiple events
    if (e.target.tagName === "TD") {
      // Not a <td> -> not interested -> Avoid coloring an entire row or the entire table
      e.target.style.backgroundColor = bgcolor;
    }
  });

  for (let row = 0; row < height; row++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let column = 0; column < width; column++) {
      const td = document.createElement("td");
      tr.appendChild(td);
    }
  }
}
// pixelCanvas
