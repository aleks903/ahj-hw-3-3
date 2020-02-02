/* eslint-disable class-methods-use-this */
const blockImg = document.getElementsByClassName('block-img')[0];
const elementError = document.getElementById('error-url');
const elementNameImg = document.getElementById('name-img');
const elementURLImg = document.getElementById('url-img');

export default class AddImg {
  createImg(name, url) {
    const addImgElement = document.createElement('img');
    addImgElement.src = url;

    addImgElement.addEventListener('load', () => {
      elementError.classList.add('hidden');
      addImgElement.className = 'item-img';
      addImgElement.alt = name;

      const addDivImg = document.createElement('div');

      addDivImg.className = 'item-img-div';
      addDivImg.innerHTML = '<div class="close">x</div>';
      addDivImg.appendChild(addImgElement);
      blockImg.appendChild(addDivImg);
      elementNameImg.value = '';
      elementURLImg.value = '';
    });

    addImgElement.addEventListener('error', () => {
      elementError.classList.remove('hidden');
    });
  }
}
