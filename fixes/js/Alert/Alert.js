if (document.querySelector('.common-home')) {
  const btns = document.querySelectorAll('.add_to_wishlist > button');
  const banner = document.querySelector('.main-slider');


  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const alert = document.querySelector('.alert');
      setTimeout(() => {
        banner.insertAdjacentHTML('afterend', alert.outerHTML);
        alert.remove();
      }, 2000);
    });
  });
}
