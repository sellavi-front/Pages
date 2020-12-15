export const setDelivery = (obj) => {
  return `
  <div class="d-flex content-delivery">
    <section class="delivery__right">
      <h2 class="delivery__right-title">Доставка курьером</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/1200px-DPD_logo_%282015%29.svg.png"
        height="50"
        style="margin-right: 20px"
      />
      <img src="https://www.drupal.org/files/project-images/dostavista-logo.png" height="50" />
    </section>
    <section class="delivery__content">
      <p class="delivery__content-title">
        Мы осуществляем доставку по России в партнерстве с компанией DPD и Dostavista
      </p>
      <p class="delivery__content-label">
        В случае затруднений наш сотрудник по телефону ${obj.phone} поможет тебе рассчитать
        стоимость доставки.
      </p>
      <p class="delivery__content-label">
        Доставка осуществляется двумя способами: до пункта самовывоза и до дверей. Доставка до дверей
        стоит дороже.
      </p>
      <p class="delivery__content-label">
        Доставка по России компанией DPD и. Dostavista, осуществляется на условиях 100% предоплаты за
        товар и доставку. Доставка по схеме «Наложенный платеж» (оплата при получении) не
        осуществляется.
      </p>
      <p class="delivery__content-label">
        Заказ бесплатно хранится в пункте выдачи 14 календарных дней, затем отправляется обратно нам.
        Повторная отправка на твой адрес производится за твой счёт, а возврат денег – за вычетом
        стоимости обратной пересылки.
      </p>
    </section>
  </div>`;
};