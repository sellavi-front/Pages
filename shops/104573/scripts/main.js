import changeTitleBlogToNews from './changeTitleBlogToNews.js';
import btnWishListToBtnAddToCart from './BtnWishListToBtnAddToCart.js'
import cutSrcImg from './cutSrcImg.js';
import changeTextCategoryBtn from './changeTextCategoryBtn.js';
// import addTitleForCategory from './addTitleForCategory.js';
// import changeTextBannerBtn from './changeTextBannerBtn.js'
import pages from '../config/conditions.js';
// import addCategories from './addCategories.js';
// import dataCategories from '../utils/dataCategories.js';
import setBannerCaption from './setBannerCaption.js';
import renderBanner from "../styles/banner/banner.js"

renderBanner()

if (pages.all) {
  changeTitleBlogToNews();
}

if (document.querySelector('.product-item.product-layout')) {
  btnWishListToBtnAddToCart();
}

// if (pages.main) {
//   setBannerCaption('https://res.cloudinary.com/depgheppz/image/upload/v1614779607/Group_7423535_fvlseb.svg');
//   // addTitleForCategory('Каталог')
//   cutSrcImg();
//   changeTextCategoryBtn();
//   // addCategories(dataCategories);
// }
