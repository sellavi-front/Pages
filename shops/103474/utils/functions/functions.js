import pages from "./../../utils/pages/pages.js"

export default class ChangeIconInProductCard {

  target = document.querySelector('body div.products');
  config = {
    childList: true,
  };

  callBack(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        target.querySelectorAll('.product-item img').forEach((prod) => {
          if (prod.getAttribute('src').includes('e_blur:2000')) {
            prod.setAttribute('src', prod.getAttribute('src').replace(/e_blur:2000/gi, ''));
          }
        });

        let priceActions = document.querySelectorAll('.price_actions');
        let addToCart = document.querySelectorAll('.add_to_cart');
        let addToWishList = document.querySelectorAll('.add_to_wishlist');
        let buttonContainerInProductCard = new ButtonContainerInProductCard(
          addToCart,
          addToWishList,
          priceActions,
        );
        buttonContainerInProductCard.createContainer();
      }
    }
  }

  change() {
    new MutationObserver(this.callBack).observe(target, config);
  }
}