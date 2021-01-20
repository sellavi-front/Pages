export default class ButtonContainerInProductCard {
  constructor(addToCart, addToWishList, container) {
    this.container = container;
    this.addToCart = addToCart;
    this.addToWishList = addToWishList;
  }

  delete(element) {
    element.forEach(el => el.remove());
  }

  createContainer() {
    this.container.forEach((priceCont, i) => {
      if (!priceCont.querySelector('.buttons__container')) {
        const wishlist = priceCont.closest('div').querySelector('.add_to_wishlist');
        const cart = priceCont.closest('div').querySelector('.add_to_cart');
        console.log("New params: ", wishlist, cart)
        priceCont.insertAdjacentHTML(
          'beforeend',
          `<div class="buttons__container">${wishlist.outerHTML}${cart.outerHTML}</div>`,
        );
      }
    });
  }
}


/*window.onload = () => {*/
  if (document.querySelector('body.product-category') || document.querySelector('body.common-home .products')) {
    let target = document.querySelector('body div.products');
    const config = {
      childList: true,
    };
    const callback = function (mutationsList, observer) {
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
          let buttonContainerInProductCard = new ButtonContainerInProductCard(addToCart, addToWishList, priceActions);
          buttonContainerInProductCard.createContainer();

        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  }