const BtnWishListToBtnAddToCart = (() => {
  const cards = document.querySelectorAll('.products.grid .product-item');

  cards.forEach(card => {
    card.querySelector('.add_to_cart').prepend(card.querySelector('.add_to_wishlist').outerHTML)
  })
})();

export default BtnWishListToBtnAddToCart;