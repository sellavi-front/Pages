const BtnWishListToBtnAddToCart = (() => {
  const cards = document.querySelectorAll('.products.grid .product-item');

  cards.forEach(card => {
    const wishList = card.querySelector('.add_to_wishlist');
    card.querySelector('.add_to_cart').insertAdjacentHTML('beforebegin', wishList.outerHTML)
    wishList.remove();
  })
})();

export default BtnWishListToBtnAddToCart;