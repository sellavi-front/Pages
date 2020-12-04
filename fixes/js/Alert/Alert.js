const btns = document.querySelectorAll('.product-item>.add_to_wishlist>btn');
const banner = document.querySelector('.main-slider');

btns.forEach((btn) => {
  btn.addEventListener('click', banner.insertAdjacentHTML('afterend', document.querySelector('.alert')));
});
