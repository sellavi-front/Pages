import  DeleteElements from '../../modules/DeleteElements/DeleteElements.js';

if (document.querySelector('.wrapper')) {
  const search = document.querySelector('.header-search');
  const cartText = document.querySelector('.cart > span');

  const forDelete  = [search, cartText];
  const deleteElements = new DeleteElements(forDelete);

  deleteElements.remove();
}