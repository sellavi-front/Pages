import changeTitleBlogToNews from './changeTitleBlogToNews.js';
import btnWishListToBtnAddToCart from './BtnWishListToBtnAddToCart.js'
import cutSrcImg from './cutSrcImg.js';
import changeTextCategoryBtn from './changeTextCategoryBtn.js';
import addTitleForCategory from './addTitleForCategory.js';

// import changeTextBannerBtn from './changeTextBannerBtn.js'
import pages from '../config/conditions.js';

if (pages.all) {
  changeTitleBlogToNews();
}

if (document.querySelector('.product-item.product-layout')) {
  btnWishListToBtnAddToCart();
}

if (pages.main) {
  addTitleForCategory('Каталог')
  cutSrcImg();
  changeTextCategoryBtn();
}
