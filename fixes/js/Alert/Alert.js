if (document.querySelector('.common-home')) {
  const btns = document.querySelectorAll('.add_to_wishlist > button');
  const banner = document.querySelector('.main-slider');

  console.log(btns);
  console.log(banner);

  btns.forEach((btn) => {
    console.log(btn)
    console.log(document.querySelector('.alert'));
    btn.addEventListener('click', () => {
      console.log(document.querySelector('.alert'));
      banner.insertAdjacentHTML('afterend', document.querySelector('.alert'));
    });
  });
}
