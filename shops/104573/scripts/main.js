import changeTitleBlogToNews from './changeTitleBlogToNews.js';
import btnWishListToBtnAddToCart from './BtnWishListToBtnAddToCart.js'
import cutSrcImg from './cutSrcImg.js';
import changeTextCategoryBtn from './changeTextCategoryBtn.js';
import pages from '../config/conditions.js';
import setBannerCaption from './setBannerCaption.js';
import renderBanner from "../styles/banner/banner.js"
import renderSlider from "./addSlider.js";


if (pages.all) {
  changeTitleBlogToNews();
}

if (document.querySelector('.product-item')) {
  btnWishListToBtnAddToCart();
}


if (pages.main) {
  renderBanner()
}
renderSlider()

