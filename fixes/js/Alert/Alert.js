if (document.querySelector('.common-home')) {
  const btns = document.querySelectorAll(
    '.products > .product-item > div > .price_actions > div > .add_to_wishlist > button',
  );
  const banner = document.querySelector('.main-slider');

  console.log(btns);
  console.log(banner);

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        console.log(document.querySelector('.alert'));
        banner.insertAdjacentHTML('afterend', document.querySelector('.alert'));
      }, 500);
    });
  });
}
