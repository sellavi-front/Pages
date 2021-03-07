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
import renderSlider from "./addSlider.js";
import sender from "../styles/banner/home-form.js";

// if (pages.main) {
//   renderBanner()
// }

if (pages.all) {
  changeTitleBlogToNews();
}

if (document.querySelector('.product-item')) {
  btnWishListToBtnAddToCart();
}

if (pages.main) {
  let homeFormBtn = document.querySelector(".banner__submit__form__btn")
  homeFormBtn.addEventListener("click", () => {
    sendHomeForm().call()
  })
}

if (pages.main) {
  renderBanner()
}
renderSlider()

// if (pages.main) {
//   setBannerCaption('https://res.cloudinary.com/depgheppz/image/upload/v1614779607/Group_7423535_fvlseb.svg');
//   // addTitleForCategory('Каталог')
//   cutSrcImg();
//   changeTextCategoryBtn();
//   // addCategories(dataCategories);
// }
