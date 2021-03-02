import './utils/fixes.js'
import './utils/accuring/accuring.js'

import '../../components/HeaderTypeOne/HeaderTypeOne.js';

import pages from './config/conditions.js'
import { changeTitleBlogToNews } from './scripts/main.js';

if (pages.all) {
  changeTitleBlogToNews();
}

if (document.querySelector('.product-item.product-layout')) {
  BtnWishListToBtnAddToCart();
}

if (pages.main) {
  cutSrcImg();
  changeTextCategoryBtn();
}
