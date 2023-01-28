async function selection() {
  console.log("hello");
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    let min_index = i;
    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      ele[j].style.background = "red";
      await wait(delay);
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        if (min_index != i) {
          ele[min_index].style.background = "cyan";
        }
        min_index = j;
      } else {
        ele[j].style.background = "cyan";
      }
    }
    await wait(delay);
    swap(ele[min_index], ele[i]); //inside main.js
    ele[min_index].style.background = "cyan";
    ele[i].style.background = "rgb(5, 184, 10)"; //green
  }
}

const selectionSortBtn = document.querySelector(".selection");
selectionSortBtn.addEventListener("click", async function () {
  
  // Time and Space complexity
  const timeComplexity = document.querySelector("#time-complexity");
  timeComplexity.innerHTML = "<h4>T.C:</h4>";
  const bc = document.createElement("h5");
  const ac = document.createElement("h5");
  const wc = document.createElement("h5");
  bc.innerHTML = `Best Case: Ω(n${"2".sup()})`;
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
  await selection();
  await enableSortingBtn();
  await enableSizeBtn();
  await enableArrayBtn();
});
