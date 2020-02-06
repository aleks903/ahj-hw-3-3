import AddImg from './AddImg.js';

const elementForm = document.getElementById('input-form');
const elementNameImg = document.getElementById('name-img');
const elementURLImg = document.getElementById('url-img');
const blockImg = document.getElementsByClassName('block-img')[0];
const elementError = document.getElementById('error-url');

const addImg = new AddImg(blockImg, elementError, elementNameImg, elementURLImg);
let nameImg;
let urlImg;

elementForm.addEventListener('submit', (event) => {
  event.preventDefault();
  nameImg = elementNameImg.value;
  urlImg = elementURLImg.value;
  addImg.createImg(nameImg, urlImg);
});

blockImg.addEventListener('click', (event) => {
  if (event.target.className === 'close') {
    const itemElemnt = event.target.closest('.item-img-div');
    blockImg.removeChild(itemElemnt);
  }
});
