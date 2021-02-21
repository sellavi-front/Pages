import pages from './../../utils/pages/pages.js';

export default class ChangeIconInProductCard {
  constructor(icons) {
    this.icons = icons;
    this.target = document.querySelector('body div.products');
    this.config = {
      childList: true,
    };
  }

  changeIcons() {
    let addToCart = Array.from(document.querySelectorAll('.add_to_cart i.fa-shopping-cart'));
    let addToWishList = Array.from(document.querySelectorAll('.add_to_wishlist i.fa-heart'));

    console.log(this.icons);
    addToCart.concat(addToWishList).forEach((ico) => {

      if (ico.classList.contains('fa-shopping-cart')) {
        ico.insertAdjacentHTML('afterbegin', this.icons.cart);
      } else if (ico.classList.contains('fa-heart')) {
        ico.insertAdjacentHTML('afterbegin', this.icons.like);
      }
      while (ico.classList.length > 0) {
        ico.classList.remove(ico.classList.item(0));
      }
    });
  }

  callBack(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        this.changeIcons();
      }
    }
  }

  change() {
    new MutationObserver(this.callBack).observe(this.target, this.config);
  }
}