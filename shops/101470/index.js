import  DeleteElements from '../../modules/DeleteElements/DeleteElements.js';

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div');
  const search = document.querySelector('.header-search');
  const cartText = document.querySelector('#cart > span');
  const navigation = document.querySelector('.navigation');
  const headerLogo = headerWrapper.querySelector('.logo');

  const forDelete  = [search, cartText];
  const deleteElements = new DeleteElements(forDelete);

  deleteElements.remove();

  headerWrapper.classList.add('.container-fluid');
  headerWrapper.classList.remove('.container');

  headerLogo.insertAdjacentHTML('afterend', navigation);
}