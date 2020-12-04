const btns = document.querySelectorAll('.product-item>.add_to_wishlist>btn');
const banner = document.querySelector('.main-slider');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    setTimeout(() => {
      console.log(document.querySelector('.alert'))
      banner.insertAdjacentHTML('afterend', document.querySelector('.alert'))
    }, 500)
  });
});
