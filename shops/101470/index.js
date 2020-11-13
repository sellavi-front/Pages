import  DeleteElements from '../../modules/DeleteElements/DeleteElements.js';

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const search = document.querySelector('.header-search');
  const cartText = document.querySelector('#cart > span');
  const navigation = document.querySelector('.navigation-wrapper>div>.navigation');
  const navigationCopy = navigation.cloneNode(true);
  const headerLogo = headerWrapper.querySelector('.logo');

  const forDelete  = [search, cartText, navigation];
  const deleteElements = new DeleteElements(forDelete);

  deleteElements.remove();

  headerWrapper.classList.add('container-fluid');
  headerWrapper.classList.remove('container');
console.log(navigationCopy);
  headerLogo.insertAdjacentHTML('afterend', navigationCopy);
}