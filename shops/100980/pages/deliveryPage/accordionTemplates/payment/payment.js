const paymentTemplate = `
<div class="payment__container">
    <h5>Способы оплаты заказа</h5>
    <ul>
      <li>
        <h5>— Наличный рассчет:</h5>
        <p>Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure для проведения платежа также может потребоваться ввод специального пароля</p>
      </li>
      <li>
        <h5>— Безналичный расчет:</h5>
        <p>Оплата заказа осуществляется по безналичному расчету от юридических лиц. После оформления заказа с Вами свяжется менеджер и подготовит все необходимые документы.</p>
      </li>
      <li>
        <h5>— Банковской картой:</h5>
        <p>При получении заказа в согласованном по телефону с сотрудником нашей компании месте выдачи заказа. При получении товара обязательно проверьте комплектацию товара и наличие чека.</p>
        <p>При предоплате банковской картой на сайте нашей компании во время оформления заказа. Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо выбрать Способ оплаты “Онлайн оплата“. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:</p>
        <div class="payment__block">
          <div class="payment__item">
              <img src="https://cdn.sellavi.com/image/upload/v1597152896/ru/clients/101078/7d70fb1624a17f57ab805c2c0799dd06aa29e2bd.png" alt="img" />
          </div>
          <div class="payment__item">
              <img src="https://cdn.sellavi.com/image/upload/v1597152975/ru/clients/101078/9c06aeead99e8efc00279714ce580159f1be99f3.png" alt="img" />
          </div>
          <div class="payment__item">
              <img src="https://cdn.sellavi.com/image/upload/v1597152720/ru/clients/101078/cce788e0047bd812ef301e92744dbbb61caa15b0.png" alt="img" />
          </div>
          <div class="payment__item">
              <img src="https://cdn.sellavi.com/image/upload/v1597153002/ru/clients/101078/4c4a629502fa37b8bf93861a526d5c37e8bb4f5b.png" alt="img" />
          </div>
        </div>
      </li>
    </ul>
</div>
`

export default paymentTemplate