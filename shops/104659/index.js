import './utils/fixes.js'
import './utils/accuring/accuring.js'

import '../../components/HeaderTypeTwo/HeaderTypeTwo.js';

import pages from './config/conditions.js'
import { changeTitleBlogToNews } from './scripts/main.js';

if (pages.all) {
  changeTitleBlogToNews();

  if (document.querySelector('.product-item')) {
    BtnWishListToBtnAddToCart();
  }
}
