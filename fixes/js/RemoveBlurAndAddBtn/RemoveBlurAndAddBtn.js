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

const priceActions = document.querySelectorAll('.price_actions');
const addToCart = document.querySelectorAll('.add_to_cart');
const addToWishList = document.querySelectorAll('.add_to_wishlist');

const buttonContainerInProductCard = new ButtonContainerInProductCard(addToCart, addToWishList, priceActions);

buttonContainerInProductCard.createContainer();