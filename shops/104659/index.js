import './utils/fixes.js'
import './utils/accuring/accuring.js'

import pages from './config/conditions.js'
import { changeTitleBlogToNews } from './scripts/main.js';

if (pages.all) {
  changeTitleBlogToNews();
}


document.querySelector('.header-wrapper').classList.add('bg-black');
