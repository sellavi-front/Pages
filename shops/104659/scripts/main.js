import header from './header.js';
import changeTitleBlogToNews from './changeTitleBlogToNews.js';
import btnWishListToBtnAddToCart from './BtnWishListToBtnAddToCart.js';
import cutSrcImg from './cutSrcImg.js';
import changeTextCategoryBtn from './changeTextCategoryBtn.js';
import addTitleForCategory from './addTitleForCategory.js';
import pages from '../config/conditions.js';
import addCategories from './addCategories.js';
import dataCategories from '../utils/dataCategories.js';
import setBannerCaption from './setBannerCaption.js';
import setTextCategories from './setTextCategories.js';
import removeDefis from './removeDefis.js';

if (pages.all) {
  header();
  changeTitleBlogToNews();
  removeDefis();
}

if (document.querySelector('.row.products.grid')) {
  btnWishListToBtnAddToCart();
}

if (pages.main) {
  setBannerCaption(
    'https://res.cloudinary.com/depgheppz/image/upload/v1614779607/Group_7423535_fvlseb.svg',
  );
  addTitleForCategory('Каталог');
  cutSrcImg();
  changeTextCategoryBtn();
  addCategories(dataCategories);
  setTextCategories();
}
