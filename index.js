// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let nums = [1, 2, 3, 4];

// Has a O(n^2) time complexity because it uses TWO loops (not optimal)
function findDupe(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count += 1;
        if (count >= 1) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(findDupe(nums));
