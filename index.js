const dish = document.getElementById('recipe-name');

console.log(dish.innerText);
console.log(dish.tagName);

const desc = document.getElementsByClassName('description');

console.log(window.getComputedStyle(desc[0]).fontSize);

const img = document.getElementsByTagName('img');

console.log(img[0].alt);

console.log({src: img[0].src, width: img[0].width, height: img[0].height});

const ingredients1 = document.getElementsByClassName('ingredients-list-paste');
const ingredients2 = document.getElementsByClassName('ingredients-list-bottom');

console.log(ingredients1[0].children.length + ingredients2[0].children.length);

console.log(ingredients1[0].children[3].innerText);

const instructions = document.getElementsByClassName('instructions-list');

const instructionsArr = [];
let i = 1;
for (const item of instructions[0].children) {
  instructionsArr.push({order: i, text: item.innerText});
  i++;
}

console.log(instructionsArr);
