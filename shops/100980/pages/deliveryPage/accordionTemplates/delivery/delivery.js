const deliveryTemplate = `
<div class="delivery__container">
    <div class="delivery__russia">
        <p>Доставка по всей России</p>
        <ul>
          <li>Доставка по России осуществляется через выбранную вами транспортную компанию (только при условии 100% оплаченного заказа)</li>
          <li>Доставка до терминалов транспортных компаний составляет 1500 рублей , в случае стоимости заказа свыше 100000 рублей  - доставка до терминала ТК бесплатная</li>
          <li>Доставка осуществляется в течение 2 рабочих дней после оформления заказа</li>
        </ul>
    </div>
    <div class="delivery__moscow">
        <p>Доставка по Москве</p>
        <ul>
          <li>От ТТК в пределах МКАД (2 рабочих дня) стоимость доставки 1500 рублей</li>
          <li>От Центра в пределах ТТК (2 рабочих дня) 2000 рублей</li>
          <li>При оформлении заказа стоимостью свыше 20000 рублей  - доставка по городу бесплатно (мебель и оборудование)</li>
        </ul>
        <small>*разгрузка машины осуществляется силами клиента</small>
        <small>*В случае отказа клиентом от заказа, доставка оплачивается!</small>
        <small>Если доставка была бесплатной, то она оплачивается в соответствии с базовым тарифом клиентом.</small>
    </div>
    <div class="delivery__mkad">
        <p>Доставка за пределы МКАД</p>
        <ul>
          <li>Стоимость доставки за МКАД рассчитывается в размере базовой стоимости 1500 рублей + 50 рублей  за 1 км от МКАД.*В случае отказа клиентом от заказа, а товар доставили на место отгрузки, доставка оплачивается!</li>
          <li>Если доставка была бесплатной, то она оплачивается в соответствии с базовым тарифом клиентом</li>
        </ul>
    </div>
    <div class="delivery__attention">
        <p>Обращаем Ваше внимание!</p>
        <p>Доставка – отдельная услуга, которая не включена в стоимость оборудования. Доставка товара осуществляется «до подъезда». Услуга доставки не включает в себя разгрузочные работы, проверку и подключение оборудования.</p>

        <p>Водитель сдаёт поставляемый товар по количеству мест указанных в накладной. В случае отсутствия товара, покупатель в присутствии водителя составляет акт о недостаче, связывается с менеджером Компании Tradequip и устно информирует о недостаче.
        Вместе с доставленным оборудованием водитель передает покупателю товарную накладную, счет и счет-фактуру (для юридических лиц).</p>

        <p>Товар отгружается только в том случае, если покупатель предоставляет правильно оформленную доверенность на бланке предприятия. Доверенность должна содержать подпись руководителя и печать предприятия, либо покупатель должен иметь печать при себе.</p>
    </div>
  </div>
`

export default deliveryTemplate