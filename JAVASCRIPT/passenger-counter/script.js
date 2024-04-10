const countEl = document.querySelector('#count-el');
const saveEl = document.querySelector("#save-el");

let count = 0;
let countArray = [];

const increment = () => {
    count ++;
    countEl.innerText = count;
}

const save = () => {
    countArray.push(count);
    saveEl.innerText = `Previous entries: ${countArray.join(" - ")}`;
    count = 0;
    countEl.innerText = count;
}

// const save = () => {
//     let countStr = count + ' - '
//     saveEl.textContent += countStr;
//     count = 0;
//     countEl.innerText = count;
// }
