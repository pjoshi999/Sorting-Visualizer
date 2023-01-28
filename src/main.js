// Creating array to store randomly generated numbers
let arr = [];

// To create new array input size of array
function createNewArray(noOfBars = 60) {
  
  // calling helper function to delete old bars from dom
  deleteChild();

  // creating an array of random numbers 
  arr = [];

  for (let i = 0; i < noOfBars; i++) {
    arr.push(Math.floor(Math.random() * 250) + 1);
  }
  console.log(arr);

  // select the div #bars element
  const bars = document.getElementById("bars");

  // create multiple element div using loop and adding class 'bar col'
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${2 * arr[i]}px`;
    bar.style.margin = "0% 0.1%";
    bar.style.width = `${100 / noOfBars - 2 * 0.1}%`;
    bar.style.background = "rgb(23, 244, 244)";
    // bar.style.borderRadius = "10px 10px 0 0";
    bar.style.transform = "translateY(-50%);";
    bar.style.display = "inline-block";
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i + 1}`);
    bars.appendChild(bar);
  }
}
// Call to display bars right when you visit the site
createNewArray();

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArrayBtn");
newArray.addEventListener("click", function () {
  createNewArray(noOfBars);
});

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(ele1, ele2) {
  console.log(count);
  let temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
}

// Selecting speed slider from DOM
let delayElement = document.querySelector("#speed_input");

// Default input for wait function (350ms)
let delay = delayElement.value;

// Event listener to update delay time
delayElement.addEventListener("input", function () {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 520 - parseInt(delayElement.value);
});

// Used in async function so that we can do animations of sorting, takes input time in ms (1000 = 1s)
function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, delay);
  });
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}

let size = document.querySelector("#size_input");

size.addEventListener("input", function () {
  console.log(size.value, typeof size.value);
  noOfBars = parseInt(size.value);
  createNewArray(noOfBars);
});

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn() {
  document.querySelector(".bubble").disabled = true;
  document.querySelector(".selection").disabled = true;
  document.querySelector(".insertion").disabled = true;
  document.querySelector(".quick").disabled = true;
  document.querySelector(".merge").disabled = true;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeBtn() {
  document.querySelector("#size_input").disabled = true;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableArrayBtn() {
  document.querySelector(".newArrayBtn").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn() {
  document.querySelector(".bubble").disabled = false;
  document.querySelector(".selection").disabled = false;
  document.querySelector(".insertion").disabled = false;
  document.querySelector(".quick").disabled = false;
  document.querySelector(".merge").disabled = false;
}

// Enables size slider used in conjunction with disable
function enableSizeBtn() {
  document.querySelector("#size_input").disabled = false;
}

// Enables newArray buttons used in conjunction with disable
function enableArrayBtn() {
  document.querySelector(".newArrayBtn").disabled = false;
}
