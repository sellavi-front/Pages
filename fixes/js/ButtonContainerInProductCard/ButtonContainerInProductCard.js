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
        const wishlist = priceCont.closest('.thumbnail').querySelector('.add_to_wishlist');
        const cart = priceCont.closest('.thumbnail').querySelector('.add_to_cart');
        priceCont.insertAdjacentHTML(
          'beforeend',
          `<div class="buttons__container">${wishlist.outerHTML}${cart.outerHTML}</div>`,
        );
        this.delete([wishlist, cart])
      }
    });
  }

  render() {
    if(document.querySelector(".common-home") || document.querySelector(".product-product") || document.querySelector(".product-category") || document.querySelector('body.product-search .products')) {
      let priceActions = document.querySelectorAll('.price_actions');
      let addToCart = document.querySelectorAll('.add_to_cart');
      let addToWishList = document.querySelectorAll('.add_to_wishlist');
      let buttonContainerInProductCard = new ButtonContainerInProductCard(addToCart, addToWishList, priceActions);
      buttonContainerInProductCard.createContainer();
    }
  }
}
