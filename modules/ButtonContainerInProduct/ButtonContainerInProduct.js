export default class ButtonContainerInProduct {
  constructor(addToCart, addToWishList) {
    this.addToCart = addToCart;
    this.addToWishList = addToWishList;
  }

  createContainer() {
    addToCart.forEach((btn) => {
      btn.insertAdjacentHTML(
        'beforebegin',
        `<div class="buttons__container"></div>`,
      );
    });
  }
}

const addToCart = document.querySelectorAll('.add_to_cart');
const addToWishList = document.querySelectorAll('.add_to_wishlist');

const buttonContainerInProduct = new ButtonContainerInProduct(addToCart, addToWishList);

buttonContainerInProduct.createContainer();
//${this.addToCart.outerHTML}${this.addToWishList.outerHTML}
