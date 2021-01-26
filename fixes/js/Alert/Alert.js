if (document.querySelector('.common-home')) {
  const btns = document.querySelectorAll('.add_to_wishlist > button');
  const banner = document.querySelector('.main-slider');


  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      setTimeout(() => {
        const alert = document.querySelector('.alert');
        banner.insertAdjacentHTML('afterend', alert.outerHTML);
        alert.remove();
      }, 1000);
    });
  });
}
