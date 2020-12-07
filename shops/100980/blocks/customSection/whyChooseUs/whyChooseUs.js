let whyChooseUsLayout = `
<div class="container why__choose__us">
  <h1>Почему нас выбирают</h1>
  <div class="steps__why_container">
      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342222/delivery_1_2_crdatu.png" alt="img" />
              <h6>Доставка за 1 день</h6>
              <p>Благодаря большому количеству складов наших партнеров,
                большое количество товаров есть в наличии.</p>
          </div>
      </div>

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342230/online-class_1_mdjgnd.png" alt="img" />
              <h6>Ориентированность на клиента</h6>
              <p>Мы вместе создаем идею и советуемся на каждом этапе реализации проекта.</p>
          </div>
      </div>

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342261/achievement_1_ibie5h.png" alt="img" />
              <h6>Лучшие бренды оборудования</h6>
              <p>Мы сотрудничаем с такими производителями как Rational, Unox, Convotherm, Apach.</p>
          </div>
      </div>

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342222/quality_1_gpgb0s.png" alt="img" />
              <h6>Опыт работы более 5 лет</h6>
              <p>Мы оснащаем рестораны с 2012 года.</p>
          </div>
      </div>


      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342222/debit-cards_1_uefmfy.png" alt="img" />
              <h6>Гибкие условия оплаты</h6>
              <p>Предлагаем своим постоянным клиентам рассрочку за счет собственных средств,
                    также есть возможность купить в кредит от Банка.</p>
          </div>
      </div>

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342222/Group_25_t2lh8a.png" alt="img" />
              <h6>Гарантия на работы</h6>
              <p>Даем гарантию на каждые виды работ от 1-2 лет и бесплатное сопровождение по работе с оборудованием в течение 6 месяцев.</p>
          </div>
      </div>
  </div>
</div>
`

let renderWhyChooseUs = () => {
  document.querySelector(".custom_section").insertAdjacentHTML("beforeend", whyChooseUsLayout)
}

export default renderWhyChooseUs