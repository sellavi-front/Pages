export default class ButtonContainerInProduct {
  constructor(addToCart, addToWishList) {
    this.addToCart = addToCart;
    this.addToWishList = addToWishList;
  }

  createContainer() {
    return this.cartCont.insertAdjacentHTML(
      'beforebegin',
      `<div class="buttons__container">${this.addToCart.outerHTML}${this.addToWishList.outerHTML}</div>`,
    );
  }
}

const addToCart = document.querySelector('.add_to_cart');
const addToWishList = document.querySelector('.add_to_wishlist');

const buttonContainerInProduct = new ButtonContainerInProduct(addToCart, addToWishList);

buttonContainerInProduct.createContainer();