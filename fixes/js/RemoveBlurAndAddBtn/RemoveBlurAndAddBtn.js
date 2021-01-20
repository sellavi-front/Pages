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
    this.container.forEach((btn, i) => {
      btn.insertAdjacentHTML(
        'beforeend',
        `<div class="buttons__container">${this.addToWishList[i].outerHTML}${this.addToCart[i].outerHTML}</div>`,
      );
    });

    this.delete(addToCart);
    this.delete(addToWishList);
  }
}





window.onload = () => {
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
          const priceActions = document.querySelectorAll('.price_actions');
          const addToCart = document.querySelectorAll('.add_to_cart');
          const addToWishList = document.querySelectorAll('.add_to_wishlist');

          const buttonContainerInProductCard = new ButtonContainerInProductCard(addToCart, addToWishList, priceActions);

          buttonContainerInProductCard.createContainer();
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  }
};