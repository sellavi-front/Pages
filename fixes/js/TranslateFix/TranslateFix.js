if (location.href.includes('/checkout')) {
  const Shag1 = document.querySelector('div.checkout_title>h2');
  let Shag1Old = ' Шаг 1: Профиль & Платежная информация ';
  let Shag1New = 'Данные плательщика';

  const Shag2 = document.querySelector(
    'body > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div:nth-child(3) > div > h2',
  );
  let Shag2Old = 'Шаг 2: Платежная информация';
  let Shag2New = 'Адрес плательщика';

  const Shag3 = document.querySelector(
    'body > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.shiptobilling.clearfix.form-group > h2',
  );
  let Shag3Old = 'Shipping Address';
  let Shag3New = 'Адрес доставки';

  const Shag4 = document.querySelector('div.shipment-reloader>div>h2');
  let Shag4Old = 'Шаг 4: Способ доставки';
  let Shag4New = 'Способ доставки';

  const Shag5 = document.querySelector(
    'body > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.payment-method > h2',
  );
  let Shag5Old = 'Шаг 5: Способ оплаты';
  let Shag5New = 'Способ оплаты';

  const missingTrans1 = document.querySelector('#shipping-existing>label');
  let missingTrans1Old = 'text_pick_address';
  let missingTrans1New = 'Полный адрес';

  const missingTrans2 = document.querySelector(
    'body > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div:nth-child(3) > div > div:nth-child(4) > label',
  );
  let missingTrans2Old = 'I want to use different address';
  let missingTrans2New = 'Указать другой адрес';

  const missingTrans3 = document.querySelector('#payment-existing > label');
  let missingTrans3Old = 'text_pick_address';
  let missingTrans3New = 'Полный адрес';

  const ordComm = document.querySelector('.seller-comments.form-group label');
  let ordCommOld = 'Вы можете добавить комментарий к своему заказу';
  let ordCommNew = 'Комментарий к заказу';

  const footerCol1 = document.querySelector(
    'div.footer-widgets > div.container > div > div:nth-child(1) > div > h4',
  );
  let footerCol1Old = 'About us ';
  let footerCol1New = 'Контакты';

  const footerCol1r1 = document.querySelector(
    'div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(1) > a',
  );
  let footerCol1r1Old = 'About us ';
  let footerCol1r1New = 'О нас';

  const footerCol2 = document.querySelector(
    'div.footer-widgets > div.container > div > div:nth-child(2) > div > h4',
  );
  let footerCol2Old = 'Служба поддержки';
  let footerCol2New = 'Посетителям';

  const footerCol3 = document.querySelector(
    'div.footer-widgets > div.container > div > div:nth-child(3) > div > h4',
  );
  let footerCol3Old = 'Личный Кабинет';
  let footerCol3New = 'Клиентам';

  const MobCartMore = document.querySelector(
    'div.order-summary-toggle__text.order-summary-toggle__text--show > span',
  );
  let MobCartMoreOld = 'Show order summary';
  let MobCartMoreNew = 'Показать корзину';

  const MobCartLess = document.querySelector(
    'div.order-summary-toggle__text.order-summary-toggle__text--hide > span',
  );
  let MobCartLessOld = 'Hide order summary';
  let MobCartLessNew = 'Скрыть корзину';

  const authPassConf = document.querySelector(
    '#content > form > fieldset:nth-child(3) > div:nth-child(3) > label',
  );
  let authPassConfOld = 'Подтверждение пароля';
  let authPassConfNew = 'Подтверждение';

  const accRiCoTi = document.querySelector('#column-right > div > h2');
  let accRiCoTiOld = 'Изменить контактную информацию';
  let accRiCoTiNew = 'Информация';

  if (
    Shag1.textContent() == Shag1Old ||
    Shag2.textContent() == Shag2Old ||
    Shag3.textContent() == Shag3Old ||
    Shag4.textContent() == Shag4Old ||
    Shag5.textContent() == Shag5Old ||
    missingTrans1.textContent() == missingTrans1Old ||
    missingTrans2.textContent() == missingTrans2Old ||
    missingTrans3.textContent() == missingTrans3Old ||
    ordComm.textContent() == ordCommOld ||
    footerCol1.textContent() == footerCol1Old ||
    footerCol1r1.textContent() == footerCol1r1Old ||
    footerCol2.textContent() == footerCol2Old ||
    footerCol3.textContent() == footerCol3Old ||
    MobCartMore.textContent() == MobCartMoreOld ||
    MobCartLess.textContent() == MobCartLessOld ||
    authPassConf.textContent() == authPassConfOld ||
    accRiCoTi.textContent() == accRiCoTiOld
  ) {
    Shag1.textContent = Shag1New;
    Shag2.textContent = Shag2New;
    Shag3.textContent = Shag3New;
    Shag4.textContent = Shag4New;
    Shag5.textContent = Shag5New;
    missingTrans1.textContent = missingTrans1New;
    missingTrans2.textContent = missingTrans2New;
    missingTrans3.textContent = missingTrans3New;
    ordComm.textContent = ordCommNew;
    footerCol1.textContent = footerCol1New;
    footerCol1r1.textContent = footerCol1r1New;
    footerCol2.textContent = footerCol2New;
    footerCol3.textContent = footerCol3New;
    MobCartMore.textContent = MobCartMoreNew;
    MobCartLess.textContent = MobCartLessNew;
    authPassConf.textContent = authPassConfNew;
    accRiCoTi.textContent = accRiCoTiNew;
  }
}
