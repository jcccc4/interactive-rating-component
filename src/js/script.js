const parent = document.getElementById("scores");
const button = document.getElementById("button");

const children = parent.children;
const arr = [false, false, false, false, false];

let score = 0;
const tags = {
  notSelected:
    "bg-dark-blue w-10 h-10 rounded-full flex justify-center text-medium-grey text-bt font-overpass pt-h font-bold hover:bg-medium-grey hover:text-white",
  selected:
    "bg-orange text-white w-10 h-10 rounded-full flex justify-center text-medium-grey text-bt font-overpass pt-h font-bold ",
 };

for (let i = 0; i < children.length; i++) {
  children[i].addEventListener("click", function () {
    for (let j = 0; j < 5; j++) {
      arr[j] = false;
    }
    arr[i] = true;
    for (let j = 0; j < children.length; j++) {
      if (arr[j]) {
        children[j].className = tags.selected;
      } else {
        arr[j] = false;
        children[j].className = tags.notSelected;
      }
    }
  });

}

button.addEventListener("click", () => {
  const scoring = document.getElementById("scoring");
  const thanks = document.getElementById("thanks");
  const rating = document.getElementById("rating");
  
  scoring.classList.replace("block", "hidden");
  thanks.classList.replace("hidden", "block");
  rating.innerHTML = arr.indexOf(true)+1;
});
