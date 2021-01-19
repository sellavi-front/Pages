window.onload = () => {
  if (document.querySelector('body.product-category') || document.querySelector('body.common-home .products')) {
    let target = document.querySelector('#content > div > div.row.products.grid');
    const config = {
      childList: true,
    };
    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          target.querySelectorAll('.product-item img').forEach((prod) => {
            const cutStr = prod.getAttribute('src').includes('e_blur:2000') ? prod.getAttribute('src') : null;
            prod.setAttribute('src', cutStr.replace(/e_blur:2000/gi, ''));
          });
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  }
};
