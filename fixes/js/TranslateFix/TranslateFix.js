    const Shag1 = document.querySelector('div.checkout_title>h2');
    let Shag1Old = document.querySelector(' Шаг 1: Профиль & Платежная информация ');
    let Shag1New = document.querySelector('Данные плательщика');
    const Shag2 = document.querySelector('body > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div:nth-child(3) > div > h2');
    let Shag2Old = document.querySelector('Шаг 2: Платежная информация');
    let Shag2New = document.querySelector('Адрес плательщика');
    const Shag3 = document.querySelector('body > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.shiptobilling.clearfix.form-group > h2');
    let Shag3Old = document.querySelector('Shipping Address');
    let Shag3New = document.querySelector('Адрес доставки');
    const Shag4 = document.querySelector('div.shipment-reloader>div>h2');
    let Shag4Old = document.querySelector('Шаг 4: Способ доставки');
    let Shag4New = document.querySelector('Способ доставки');
    const Shag5 = document.querySelector('body > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.payment-method > h2');
    let Shag5Old = document.querySelector('Шаг 5: Способ оплаты');
    let Shag5New = document.querySelector('Способ оплаты');
    const missingTrans1 = document.querySelector('#shipping-existing>label');
    let missingTrans1Old = document.querySelector('text_pick_address');
    let missingTrans1New = document.querySelector('Полный адрес');
    const missingTrans2 = document.querySelector('body > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div:nth-child(3) > div > div:nth-child(4) > label');
    let missingTrans2Old = document.querySelector('I want to use different address');
    let missingTrans2New = document.querySelector('Указать другой адрес');
    const missingTrans3 = document.querySelector('#payment-existing > label');
    let missingTrans3Old = document.querySelector('text_pick_address');
    let missingTrans3New = document.querySelector('Полный адрес');
    const ordComm = document.querySelector('.seller-comments.form-group label');
    let ordCommOld = document.querySelector('Вы можете добавить комментарий к своему заказу');
    let ordCommNew = document.querySelector('Комментарий к заказу');
    const footerCol1 = document.querySelector('div.footer-widgets > div.container > div > div:nth-child(1) > div > h4');
    let footerCol1Old = document.querySelector('About us ');
    let footerCol1New = document.querySelector('Контакты');
    const footerCol1r1 = document.querySelector('div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(1) > a');
    let footerCol1r1Old = document.querySelector('About us ');
    let footerCol1r1New = document.querySelector('О нас');
    const footerCol2 = document.querySelector('div.footer-widgets > div.container > div > div:nth-child(2) > div > h4');
    let footerCol2Old = document.querySelector('Служба поддержки');
    let footerCol2New = document.querySelector('Посетителям');
    const footerCol3 = document.querySelector('div.footer-widgets > div.container > div > div:nth-child(3) > div > h4');
    let footerCol3Old = document.querySelector('Личный Кабинет');
    let footerCol3New = document.querySelector('Клиентам');
    const MobCartMore = document.querySelector('div.order-summary-toggle__text.order-summary-toggle__text--show > span');
    let MobCartMoreOld = document.querySelector('Show order summary');
    let MobCartMoreNew = document.querySelector('Показать корзину');
    const MobCartLess = document.querySelector('div.order-summary-toggle__text.order-summary-toggle__text--hide > span');
    let MobCartLessOld = document.querySelector('Hide order summary');
    let MobCartLessNew = document.querySelector('Скрыть корзину');
    const authPassConf = document.querySelector('#content > form > fieldset:nth-child(3) > div:nth-child(3) > label');
    let authPassConfOld = document.querySelector('Подтверждение пароля');
    let authPassConfNew = document.querySelector('Подтверждение');
    const accRiCoTi = document.querySelector('#column-right > div > h2');
    let accRiCoTiOld = document.querySelector('Изменить контактную информацию');
    let accRiCoTiNew = document.querySelector('Информация');

​
    if (Shag1.html() == Shag1Old
    || Shag2.html() == Shag2Old
    || Shag3.html() == Shag3Old
    || Shag4.html() == Shag4Old
    || Shag5.html() == Shag5Old
    || missingTrans1.html() == missingTrans1Old
    || missingTrans2.html() == missingTrans2Old
    || missingTrans3.html() == missingTrans3Old
    || ordComm.html() == ordCommOld
    || footerCol1.html() == footerCol1Old
    || footerCol1r1.html() == footerCol1r1Old
    || footerCol2.html() == footerCol2Old
    || footerCol3.html() == footerCol3Old
    || MobCartMore.html() == MobCartMoreOld
    || MobCartLess.html() == MobCartLessOld
    || authPassConf.html() == authPassConfOld
    || accRiCoTi.html() == accRiCoTiOld) {
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