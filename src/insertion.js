async function insertion() {
  console.log("Insertion");
  const ele = document.querySelectorAll(".bar");
  for (let i = 1; i < ele.length; i++) {
    let key = ele[i].style.height;
    let j = i - 1;
    ele[i].style.background = "blue";

    await wait(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      ele[j].style.background = "blue";
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      await wait(delay);

      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "rgb(5, 184, 10)"; //green
      }
    }
    ele[j + 1].style.height = key;
    ele[i].style.background = "rgb(5, 184, 10)"; //green
  }
}

const insertionBtn = document.querySelector(".insertion");
insertionBtn.addEventListener("click", async function () {
  
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
  await insertion();
  await enableSortingBtn();
  await enableSizeBtn();
  await enableArrayBtn();
});
