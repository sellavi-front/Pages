import pages from '../pages/pages.js';
const icon = '&#8372;';

(function () {
  const changeIcon = (list, icon) => {
    list.forEach((price) => {
      if (!price.closest('div').querySelector('svg') && !price.querySelector('ins')) {
        price.textContent = price.textContent.trim().slice(0, -1);
        price.insertAdjacentHTML('beforeend', icon);
      } else {
        const ins = price.querySelector('ins');
        const del = price.querySelector('del');

        ins.textContent = ins.textContent.trim().slice(0, -1);
        ins.insertAdjacentHTML('beforeend', icon);
        del.textContent = del.textContent.trim().slice(0, -1);
        del.insertAdjacentHTML('beforeend', icon);
      }
    });
  };

  const elemArr = [
    '.price',
    '.price_span',
    '.total_text',
    '.shipping-method > .radio > label',
    '.product-price',
    '.order_list_section__total-lines > div > .text-right',
    '.item-price',
    '.cart_drop_down .cart-norm-qty',
    '.single-price > div',
  ];

  elemArr.forEach((el) => {
    if (document.querySelector(el)) {
      changeIcon(document.querySelectorAll(el), icon);
    }
  });

  if (location.href.includes('/checkout')) {
    setTimeout(() => {
      changeIcon(document.querySelectorAll('.single-price > div'), icon);
      changeIcon(document.querySelectorAll('.checkout_table .text-right.total_table__sum'), icon);
      changeIcon(document.querySelectorAll('.cart_drop_down .cart-norm-qty'), icon);
      changeIcon(
        document.querySelectorAll('.order_list_section__total-lines > div > .text-right'),
        icon,
      );
    }, 500);
    document.querySelectorAll('.shipping-method.panel-options > .radio > label').forEach((el) => {
      el.addEventListener('click', () => {
        setTimeout(() => {
          changeIcon(document.querySelectorAll('.single-price > div'), icon);
          changeIcon(
            document.querySelectorAll('.order_list_section__total-lines > div > .text-right'),
            icon,
          );
          changeIcon(
            document.querySelectorAll('.checkout_table .text-right.total_table__sum'),
            icon,
          );
        }, 500);
      });
    });
  }

  if (pages.productCategory) {
    let target = document.querySelector('body div.products');
    const config = {
      childList: true,
    };
    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          changeIcon(document.querySelectorAll('.thumbnail .price'), icon);
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  }

  jQuery(function () {
    if (document.querySelector('.wrapper')) {
      // if (document.querySelector('.price_actions .add_to_cart')) {
      //   document.querySelectorAll('.price_actions .add_to_cart')
      // }
      const target = document.querySelector("#home > div > header > div.header-wrapper > div > div.header_widgets > div.header-cart.sticky > div.cart-wrapper > div.dropdown.cart_drop_down .dropdown-menu");
      console.log(target);
      const config = {
        attributeFilter: ['class'],
      };

      // Функция обратного вызова при срабатывании мутации
      const callback = function (mutationsList, observer) {
        console.log(mutationsList);
        for (let mutation of mutationsList) {
          if (mutation.type === 'attributes') {
            changeIcon(
              document.querySelectorAll('.header-cart .dropdown-menu .cart-content .item-price'),
              icon,
            );
          }
        }
      };

      // Создаем экземпляр наблюдателя с указанной функцией обратного вызова
      const observer = new MutationObserver(callback);

      // Начинаем наблюдение за настроенными изменениями целевого элемента
      observer.observe(target, config);

      // Позже можно остановить наблюдение

    }
  })

  // $(document).ready(() => {
  //   if (pages.all) {
  //     if (document.querySelector('.header-cart .dropdown-menu .cart-content')) {
  //       let target = document.querySelector(
  //         'header > div.header-wrapper div.header-cart.sticky > div > div.dropdown.cart_drop_down > div > div > div > div > div > div.row.vouchers > div > div:nth-child(2) > p',
  //       );

  //       const config = {
  //         childList: true,
  //       };

  //       const callback = function (mutationsList, observer) {
  //         console.log('target', target);
  //         for (let mutation of mutationsList) {
  //           if (mutation.type === 'childList') {
  //             console.log(
  //               document.querySelectorAll('.header-cart .dropdown-menu .cart-content .item-price'),
  //             );
  //             changeIcon(
  //               document.querySelectorAll('.header-cart .dropdown-menu .cart-content .item-price'),
  //               icon,
  //             );
  //           }
  //         }
  //       };
  //       const observer = new MutationObserver(callback);
  //       observer.observe(target, config);
  //     }
  //   }
  // });
})();
