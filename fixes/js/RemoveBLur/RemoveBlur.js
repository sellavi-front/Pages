window.onload = () => {
  if (document.querySelector('.product-item')) {
    let target = document.querySelector('#content > div > div.row.products.grid');
    const config = {
      childList: true,
    };
    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          target.querySelectorAll('.product-item img').forEach((prod) => {
            prod.setAttribute('src', prod.getAttribute('src').replace(/e_blur:2000/gi, ''));
          });
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  }
};
