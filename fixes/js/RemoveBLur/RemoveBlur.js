window.onload = () => {
  if (document.querySelector('body.product-category') || document.querySelector('body.common-home .products')) {
    let target = document.querySelector('body div.products');
    const config = {
      childList: true,
    };
    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          target.querySelectorAll('.product-item img').forEach((prod) => {
            const cutStr = prod.getAttribute('src').includes('e_blur:2000') ? prod.getAttribute('src') : null;
            console.log(cutStr);
            prod.setAttribute('src', cutStr.replace(/e_blur:2000/gi, ''));
          });
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  }
};
