import changeTitleBlogToNews from './changeTitleBlogToNews.js'
// import btnWishListToBtnAddToCart from './btnWishListToBtnAddToCart.js'
import cutSrcImg from './cutSrcImg.js'
import changeTextCategoryBtn from './changeTextCategoryBtn.js'
// import changeTextBannerBtn from './changeTextBannerBtn.js'


if (pages.all) {
  changeTitleBlogToNews();
}

if (document.querySelector('.product-item.product-layout')) {
  btnWishListToBtnAddToCart();
}

console.log(pages);
if (pages.main) {
  console.log('you are man in main');
  cutSrcImg();
  changeTextCategoryBtn();
}