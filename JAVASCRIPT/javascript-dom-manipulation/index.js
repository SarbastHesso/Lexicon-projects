// ########## getElementById ##########

// const mainContainer = document.getElementById("main-container");
// console.log(mainContainer); // The element will be written out in the console.

// ########## querySelector ##########
// const item = document.querySelector(".item"); // Search for class name
// const mainSection = document.querySelector("#main-section"); // Search for id
// const p = document.querySelector("p"); // Search for element tag
// const nestedItem = mainSection.querySelector(".item");

// console.log(item);
// console.log(mainSection);
// console.log(p);
// console.log(nestedItem);

// ########## querySelectorAll ##########

// const paragraphs = document.querySelectorAll("p"); // Search for the tag
// const paragraphsFromClass = document.querySelectorAll(".para"); // Search for the class

// console.log(paragraphs);
// console.log(paragraphsFromClass);

// const secondP = paragraphs[1];
// console.log(secondP);

// ########## createElement and innerText ##########

// const article = document.createElement("article"); // Creates an article element
// // console.log(article);

// article.innerText = "This is an article";
// // console.log(article);

// ########## appendChild ##########

// const section = document.querySelector("#main-section");
// section.appendChild(article);

// ########## insertAdjecentElement ##########

// Created element
// const div = document.createElement("div");
// div.innerText = "This is a created div";

// // The element on which to apply the insertAdjecentElement
// const section = document.querySelector("#main-section");

// // The insertion
// section.insertAdjacentElement("afterend", div);
// section.insertAdjacentElement("beforebegin", div);
// section.insertAdjacentElement("afterbegin", div);
// section.insertAdjacentElement("beforeend", div);

// ########## insertAdjecentHTML ##########

// The html on which to apply the insertAdjecentHTML
// const section = document.querySelector("#main-section");

// const html = `<p class="paragraph" id="2">This is a p tag <strong>created</strong> from string</p>`;

// section.insertAdjacentHTML("beforebegin", html);
// section.insertAdjacentHTML("afterend", html);

// ########## innerHTML ##########

// const innerHTMLDiv = document.querySelector(".inner-html-div");
// innerHTMLDiv.innerHTML = `<p class="normal-text">This is a p-tag inserted with innerHTML</p>`;

// console.log(innerHTMLDiv.innerHTML);
// console.log(innerHTMLDiv.innerText);

// ########## removeChild ##########

// const elementToRemove = document.querySelector(".to-be-removed");
// const removedElement = document.body.removeChild(elementToRemove);

// console.log(removedElement);

// ########## replaceChild ##########

// const oldElement = document.querySelector(".to-be-replaced");
// const newElement = document.createElement("p");
// newElement.innerText = "I am the replacement";
// document.body.replaceChild(newElement, oldElement);

// ########## children ##########

// const section = document.querySelector(".parent");
// console.log(section.children);

// ########## firstElementChild ##########
// const section = document.querySelector(".parent");
// console.log(section.firstElementChild);

// ########## lastElementChild ##########
const section = document.querySelector(".parent");
console.log(section.lastElementChild);
