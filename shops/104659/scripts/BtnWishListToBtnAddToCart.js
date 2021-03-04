const btnWishListToBtnAddToCart = () => {
  const addBtn = (arr) => {
    arr.forEach((card) => {
      const wishList = card.querySelector('.add_to_wishlist');
      card.querySelector('.add_to_cart').insertAdjacentHTML('afterend', wishList.outerHTML);
      wishList.remove()
    });
  };
  let cards = document.querySelectorAll('.products.grid .product-item');
  let target = document.querySelector('body div.products');
  const config = {
    childList: true,
  };
  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        addBtn(document.querySelectorAll('.products.grid .product-item'));
      }
    }
  };
  const observer = new MutationObserver(callback);

  addBtn(cards);
  observer.observe(target, config);
};

export default btnWishListToBtnAddToCart;
