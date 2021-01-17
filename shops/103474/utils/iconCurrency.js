(function () {
  const icon = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 448.001 448.001"
  style="width: 15px"
  xml:space="preserve"
>
  <g>
    <g>
      <path
        d="M278.881,208.001h57.12c17.673,0,32-14.327,32-32s-14.327-32-32-32h-16c8.771-26.261,7.168-54.882-4.48-80    c-19.08-39.315-59.02-64.2-102.72-64h-21.76c-34.243,1.253-66.296,17.163-88,43.68c-11.163,13.701-9.105,33.858,4.596,45.021    c13.617,11.095,33.632,9.139,44.844-4.381c10.597-12.855,26.38-20.306,43.04-20.32h16c19.214-0.663,37.091,9.801,45.92,26.88    c7.363,17.377,4.333,37.418-7.84,51.84l-1.12,1.28h-104.48c-17.673,0-32,14.327-32,32s14.327,32,32,32h51.68l-26.72,32h-56.96    c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32h15.2c-7.954,25.085-6.533,52.204,4,76.32    c18.66,40.556,58.885,66.854,103.52,67.68h21.28c34.237-0.589,66.481-16.214,88.16-42.72c10.087-14.512,6.5-34.453-8.012-44.54    c-12.33-8.571-28.962-7.414-39.988,2.78c-10.341,13.287-26.368,20.885-43.2,20.48h-16c-19.904,0.004-38.03-11.457-46.56-29.44    c-7.191-16.604-4-35.88,8.16-49.28L278.881,208.001z"
      />
    </g>
  </g>
  <g>
    <g>
      <path
        d="M304.001,240.001h-32c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32h32c17.673,0,32-14.327,32-32    C336.001,254.328,321.674,240.001,304.001,240.001z"
      />
    </g>
  </g>
</svg>
`;

  const changeIcon = (list, icon) => {
    list.forEach((price) => {
      price.textContent = price.textContent.trim().slice(0, -1);
      price.insertAdjacentHTML('beforeend', icon);
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
      console.log('enter');
      changeIcon(document.querySelectorAll('.single-price > div'), icon);
      changeIcon(document.querySelectorAll('.checkout_table .text-right.total_table__sum'), icon);
      changeIcon(document.querySelectorAll('.cart_drop_down .cart-norm-qty'), icon);
      changeIcon(document.querySelectorAll('.order_list_section__total-lines > div > .text-right'), icon);

    }, 500);
  }

  document.querySelectorAll('.shipping-method.panel-options > .radio > label').forEach(el => {
    el.addEventListener('click', () => {
      changeIcon(document.querySelectorAll('.single-price > div'), icon);
      changeIcon(document.querySelectorAll('.order_list_section__total-lines > div > .text-right'), icon);
    })
  })
})();
