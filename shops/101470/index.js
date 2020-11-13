import  DeleteElements from '../../modules/DeleteElements/DeleteElements.js';

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div');
  const search = document.querySelector('.header-search');
  const cartText = document.querySelector('#cart > span');
  const navigation = document.querySelector('.navigation');

  const forDelete  = [search, cartText];
  const deleteElements = new DeleteElements(forDelete);

  deleteElements.remove();

  headerWrapper.querySelector('.logo').insertAdjacetnHTML('afterend', navigation);

}