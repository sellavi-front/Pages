import ButtonContainerInProductCard from "../ButtonContainerInProductCard/ButtonContainerInProductCard.js"

window.onload = () => {
  if (document.querySelector('body.product-category') || document.querySelector('body.common-home .products') || document.querySelector('body.product-search .products')) {
    let target = document.querySelector('body div.products');
    const config = {
      childList: true,
    };
    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          target.querySelectorAll('.product-item img').forEach((prod) => {
            if (prod.getAttribute('src').includes('e_blur:2000')) {
              prod.setAttribute('src', prod.getAttribute('src').replace(/e_blur:2000/gi, ''));
            }
          });
          let btns = new ButtonContainerInProductCard()
          btns.render()
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  }
};
