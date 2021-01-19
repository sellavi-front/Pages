export default class ButtonContainerInProduct {
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
        'afterend',
        `<div class="buttons__container">${this.addToWishList[i].outerHTML}${this.addToCart[i].outerHTML}</div>`,
      );
    });

    // this.delete(addToCart);
    // this.delete(addToWishList);
  }
}

export default class ButtonContainerInProduct {
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
let oldHeight = document.querySelector(".row.products.grid").clientHeight
document.querySelector(".row.products.grid").addEventListener("transitionend", () => {
  let newHeight = document.querySelector(".row.products.grid").clientHeight
  if(oldHeight < newHeight && document.querySelector(".buttons__container")) {
    console.log("Listener of height row products is working!")
    const price = document.querySelectorAll('.product-item .price');
    const addToCart = document.querySelectorAll('.add_to_cart');

    if (document.querySelectorAll('.add_to_wishlist').length === 0) {
      var wishList = document.querySelectorAll('.remove_from_wishlist');
    } else {
      var wishList = document.querySelectorAll('.add_to_wishlist');
    }


    const buttonContainerInProduct = new ButtonContainerInProduct(addToCart, wishList, price);

    buttonContainerInProduct.createContainer();
    buttonContainerInProduct.delete(addToCart);
    buttonContainerInProduct.delete(wishList);


    let imgEl = document.querySelectorAll('.img-fluid.lazy');
    for (let i = 0; i < imgEl.length; i++) {
      if (imgEl[i].getAttribute('data-src')) {
        imgEl[i].setAttribute('src', imgEl[i].getAttribute('data-src'));
      }
    }
  } else console.log("Smth wrong with height")

})




//   const price = document.querySelectorAll('.product-item .price');
// const addToCart = document.querySelectorAll('.add_to_cart');

// if (document.querySelectorAll('.add_to_wishlist').length === 0) {
//  var wishList = document.querySelectorAll('.remove_from_wishlist');
// } else {
//   var wishList = document.querySelectorAll('.add_to_wishlist');
// }


//   const buttonContainerInProduct = new ButtonContainerInProduct(addToCart, wishList, price);

//   buttonContainerInProduct.createContainer();
//   buttonContainerInProduct.delete(addToCart);
//   buttonContainerInProduct.delete(wishList);

// setTimeout(() => {
//   const price = document.querySelectorAll('.product-item .price');
// const addToCart = document.querySelectorAll('.add_to_cart');

// if (document.querySelectorAll('.add_to_wishlist').length === 0) {
//  var wishList = document.querySelectorAll('.remove_from_wishlist');
// } else {
//   var wishList = document.querySelectorAll('.add_to_wishlist');
// }


//   const buttonContainerInProduct = new ButtonContainerInProduct(addToCart, wishList, price);

//   buttonContainerInProduct.createContainer();
//   buttonContainerInProduct.delete(addToCart);
//   buttonContainerInProduct.delete(wishList);
// }, 4000)

// setTimeout (() => {
//   let imgEl = document.querySelectorAll('.img-fluid.lazy');
//   for (let i = 0; i < imgEl.length; i++) {
//     if (imgEl[i].getAttribute('data-src')) {
//       imgEl[i].setAttribute('src', imgEl[i].getAttribute('data-src'));
//     }
//   }
// }, 4000);