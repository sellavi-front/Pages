import pages from "./../../utils/pages/pages.js"

export default class ChangeIconInProductCard {

  target = document.querySelector('body div.products');
  config = {
    childList: true,
  };

  constructor(icons) {
    this.icons = icons;
  }

  callBack(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        target.querySelectorAll('.product-item img').forEach((prod) => {
          if (prod.getAttribute('src').includes('e_blur:2000')) {
            prod.setAttribute('src', prod.getAttribute('src').replace(/e_blur:2000/gi, ''));
          }
        });

        let addToCart = document.querySelectorAll('.add_to_cart i');
        let addToWishList = document.querySelectorAll('.add_to_wishlist i');



        Object.assign(addToCart, addToWishList).forEach(ico => {
          while (ico.classList.length > 0) {
            ico.classList.remove(ico.classList.item(0))
          }
          if (ico.classList.contains('fa-shopping-cart')) {
            ico.insertAdjacentHTML('afterbegin', this.icons.cart)
          } else if (ico.classList.contains('fa-heart')) {
            ico.insertAdjacentHTML('afterbegin', this.icons.like)
          }
        })
      }
    }
  }

  change() {
    new MutationObserver(this.callBack).observe(target, config);
  }
}