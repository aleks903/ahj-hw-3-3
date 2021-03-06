/* eslint-disable class-methods-use-this */
export default class AddImg {
  constructor(blockImg, elementError, elementNameImg, elementURLImg) {
    this.blockImg = blockImg;
    this.elementError = elementError;
    this.elementNameImg = elementNameImg;
    this.elementURLImg = elementURLImg;
  }

  createImg(name, url) {
    const addImgElement = document.createElement('img');
    addImgElement.src = url;

    addImgElement.addEventListener('load', () => {
      this.elementError.classList.add('hidden');
      addImgElement.className = 'item-img';
      addImgElement.alt = name;

      const addDivImg = document.createElement('div');

      addDivImg.className = 'item-img-div';
      addDivImg.innerHTML = '<div class="close">x</div>';
      addDivImg.appendChild(addImgElement);
      this.blockImg.appendChild(addDivImg);
      this.elementNameImg.value = '';
      this.elementURLImg.value = '';
    });

    addImgElement.addEventListener('error', () => {
      this.elementError.classList.remove('hidden');
    });
  }
}
