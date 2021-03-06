export const setPickup = (obj) => {
  return `
  <div class="d-flex content-delivery">
    <section class="delivery__right">
      <h2 class="delivery__right-title">Самовывоз</h2>
      <p class="delivery__right-small">
        <span class="delivery__right-subtitle">Бесплатно</span>
        <br />
        Только по ${obj.city}
      </p>
    </section>
    <section class="delivery__content">
      <p class="delivery__content-title">${obj.adress}</p>
      <p class="delivery__content-label">
        Только в ${obj.city} по выбору покупателя возможно получение заказа у сотрудника нашей компании
        в согласованном с ним по телефону ${obj.phone} на месте. В этом случае оплата товара
        производится только наличными или банковской картой непосредственно при получении товара (без
        предоплаты в режиме онлайн). Время работы нашего сотрудника: ${obj.timeWork} При получении товара обязательно проверь комплектацию товара и наличие чека.
      </p>
    </section>
  </div>`;
};