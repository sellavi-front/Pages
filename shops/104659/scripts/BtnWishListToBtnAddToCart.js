const BtnWishListToBtnAddToCart = (() => {
  const cards = document.querySelectorAll('.products.grid .product-item');

  cards.forEach(card => {
    const wishList = card.querySelector('.add_to_wishlist');
    card.querySelector('.add_to_cart').insertAdjacentHTML('beforebegin', card.querySelector('.add_to_wishlist').outerHTML)
  })
})();

export default BtnWishListToBtnAddToCart;