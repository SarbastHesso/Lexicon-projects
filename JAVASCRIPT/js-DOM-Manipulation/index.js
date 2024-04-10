// --1--
const recipeName = document.querySelector("#recipe-name");
console.log(recipeName.innerText);

// --2--
const htmlTag = recipeName.tagName;
console.log(htmlTag);

// --3--
const description = document.querySelector(".description");
const computedStyle = window.getComputedStyle(description);
const pFontSize = computedStyle.fontSize;
console.log(pFontSize);

// --4--
const image = document.querySelector(".image-container>img");
const altContent = image.getAttribute('alt');
console.log(altContent);

// --5--
const imageUrl = image.getAttribute('src');
const imageComputedStyles = window.getComputedStyle(image);
let imgUrlAndDim = {
    url: imageUrl,
    height: imageComputedStyles.height,
    width: imageComputedStyles.width
};
console.log(imgUrlAndDim);

// --6--
const ingredientsListPasteItems = document.querySelectorAll('.ingredients-list-paste>li');
console.log(ingredientsListPasteItems.length);

// --7--
const fourthEl = ingredientsListPasteItems[3];
console.log(fourthEl);
console.log(fourthEl.innerText);

// --8--
const instructionsListItems = document.querySelectorAll(".instructions-list>li");
const instructionItems = [];
instructionsListItems.forEach((item, index) => {
  let instructionItem = {
    order: index + 1,
    text: item.innerText,
  };
  instructionItems.push(instructionItem);
});
console.log(instructionItems);





