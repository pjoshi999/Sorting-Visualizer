let count = 0;
async function bubble() {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      count++;
      ele[j].style.background = "blue";
      ele[j + 1].style.background = "blue";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await wait(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "cyan";
      ele[j + 1].style.background = "cyan";
    }
    ele[ele.length - i - 1].style.background = "rgb(5, 184, 10)"; //green
  }
}

const bubbleSortBtn = document.querySelector(".bubble");
bubbleSortBtn.addEventListener("click", async function () {
  
  // Time and Space complexity
  const timeComplexity = document.querySelector("#time-complexity");
  timeComplexity.innerHTML = "<h4>T.C:</h4>";
  const bc = document.createElement("h5");
  const ac = document.createElement("h5");
  const wc = document.createElement("h5");
  bc.innerHTML = "Best Case: Ω(n)";
  bc.style.color = "white";
  timeComplexity.appendChild(bc);
  ac.innerHTML = `Average Case: θ(n${"2".sup()})`;
  ac.style.color = "white";
  timeComplexity.appendChild(ac);
  wc.innerHTML = `Worst Case: O(n${"2".sup()})`;
  wc.style.color = "white";
  timeComplexity.appendChild(wc);

  const spaceComplexity = document.querySelector("#space-complexity");
  spaceComplexity.innerHTML = "";
  const sc = document.createElement("h5");
  sc.innerHTML = "<h4>S.C:</h4> O(1)";
  spaceComplexity.appendChild(sc);

  disableSortingBtn();
  disableSizeBtn();
  disableArrayBtn();
  await bubble();
  await enableSortingBtn();
  await enableSizeBtn();
  await enableArrayBtn();
});
