export const setPayment = (obj) => {
  return `
<div class="d-flex content-delivery">
  <section class="delivery__right">
<h2 class="pay__title">Способы оплаты заказа</h2>
<h4>
  <span class="title-circle">•<span> Наличный рассчет: </span></span>
</h4>
<p class="label-default">
  Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК.
  Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с
  использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию
  безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept,
  J-Secure для проведения платежа также может потребоваться ввод специального пароля
</p>
<h4>
  <span class="title-circle">•<span>&nbsp;Банковской картой: </span></span>
</h4>
<p class="label-default">
  — При получении заказа в согласованном по телефону с сотрудником нашей компании месте выдачи
  заказа. При получении товара обязательно проверьте комплектацию товара и наличие чека.
  <br />
  — При предоплате банковской картой на сайте нашей компании во время оформления заказа. Для выбора
  оплаты товара с помощью банковской карты на соответствующей странице необходимо выбрать Способ
  оплаты "Онлайн оплата". Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт
  следующих платёжных систем:
</p>
</section>
<div class="faq__content--images" data-v-8d487c20="">
  <figure data-v-8d487c20="">
    <img
      class="faq__content--images_img"
      src="https://cdn.sellavi.com/image/upload/v1597152896/ru/clients/101078/7d70fb1624a17f57ab805c2c0799dd06aa29e2bd.png"
      height="50"
      alt="МИР"
      data-v-8d487c20=""
    />
    <figcaption data-v-8d487c20="">МИР</figcaption>
  </figure>
  <figure data-v-8d487c20="">
    <img
      class="faq__content--images_img"
      src="https://cdn.sellavi.com/image/upload/v1597152975/ru/clients/101078/9c06aeead99e8efc00279714ce580159f1be99f3.png"
      height="50"
      alt="VISA International"
      data-v-8d487c20=""
    />
    <figcaption data-v-8d487c20="">VISA International</figcaption>
  </figure>
  <figure data-v-8d487c20="">
    <img
      class="faq__content--images_img"
      src="https://cdn.sellavi.com/image/upload/v1597152720/ru/clients/101078/cce788e0047bd812ef301e92744dbbb61caa15b0.png"
      height="50"
      alt="Mastercard Worldwide"
      data-v-8d487c20=""
    />
    <figcaption data-v-8d487c20="">Mastercard Worldwide</figcaption>
  </figure>
  <figure data-v-8d487c20="">
    <img
      class="faq__content--images_img"
      src="https://cdn.sellavi.com/image/upload/v1597153002/ru/clients/101078/4c4a629502fa37b8bf93861a526d5c37e8bb4f5b.png"
      height="50"
      alt="JCB"
      data-v-8d487c20=""
    />
    <figcaption data-v-8d487c20="">JCB</figcaption>
  </figure>
</div>
<h4>Описание процесса передачи данных во время оплаты заказа с сайта компании</h4>
<p class="label-default">
  Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной
  информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам
  за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским
  картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int.,
  MasterCard Europe Sprl, JCB.
</p>
</div>`;
};