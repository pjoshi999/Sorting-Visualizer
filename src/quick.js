async function partition(ele, low, high) {
  let i = low - 1;

  ele[high].style.background = "red";

  for (let j = low; j <= high - 1; j++) {
    //color current element
    ele[j].style.background = "yellow";
    await wait(delay);

    if (parseInt(ele[j].style.height) < parseInt(ele[high].style.height)) {
      i++;
      swap(ele[i], ele[j]); //inside main.js
      ele[i].style.background = "orange";
      if (i != j) {
        ele[j].style.background = "orange";
      }
      await wait(delay);
    } else {
      ele[j].style.background = "pink";
    }
  }
  i++;
  await wait(delay);
  swap(ele[i], ele[high]);
  ele[high].style.background = "pink";
  ele[i].style.background = "rgb(5, 184, 10)";
  await wait(delay);

  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != "rgb(5, 184, 10)") {
      ele[k].style.background = "cyan";
    }
  }

  return i;
}

async function quick(ele, low, high) {
  if (low < high) {
    let pivotIndex = await partition(ele, low, high);
    quick(ele, low, pivotIndex - 1);
    quick(ele, pivotIndex + 1, high);
  } else {
    if (low >= 0 && low < ele.length && high >= 0 && high < ele.length) {
      ele[high].style.background = "rgb(5, 184, 10)";
      ele[low].style.background = "rgb(5, 184, 10)";
    }
  }
}

const quickSortBtn = document.querySelector(".quick");
quickSortBtn.addEventListener("click", async function () {
  
  // Time and Space complexity
  const timeComplexity = document.querySelector("#time-complexity");
  timeComplexity.innerHTML = "<h4>T.C:</h4>";
  const bc = document.createElement("h5");
  const ac = document.createElement("h5");
  const wc = document.createElement("h5");
  bc.innerHTML = "Best Case: Ω(n log(n))	";
  bc.style.color = "white";
  timeComplexity.appendChild(bc);
  ac.innerHTML = `Average Case: θ(n log(n))`;
  ac.style.color = "white";
  timeComplexity.appendChild(ac);
  wc.innerHTML = `Worst Case: O(n${"2".sup()})`;
  wc.style.color = "white";
  timeComplexity.appendChild(wc);

  const spaceComplexity = document.querySelector("#space-complexity");
  spaceComplexity.innerHTML = "<h4>S.C:</h4>";
  const sbc = document.createElement("h5");
  const swc = document.createElement("h5");
  sbc.innerHTML = `Worst Case: O(n)`;
  swc.innerHTML = `Best Case: O(log(n))`;
  spaceComplexity.appendChild(sbc);
  spaceComplexity.appendChild(swc);

  const ele = document.querySelectorAll(".bar");
  disableSortingBtn();
  disableSizeBtn();
  disableArrayBtn();
  await quick(ele, 0, ele.length - 1);
  await enableSortingBtn();
  await enableSizeBtn();
  await enableArrayBtn();
});
