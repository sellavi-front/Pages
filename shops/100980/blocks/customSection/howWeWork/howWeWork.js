let howWeWorkLayout = `
<div class="container how__we__work">
  <h1>Почему нас выбирают</h1>
  <div class="steps__how_container">

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607355654/Component_10_w0qdmw.png" alt="img" />
              <h6>ЗАЯВКА</h6>
              <p>Вы звоните нам или оставляете заявку через форму обратной связи и с Вами связывается наш менеджер</p>
          </div>
      </div>

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607355654/Component_11_iq4qz9.png" alt="img" />
              <h6>ВЫЕЗД</h6>
              <p>Менеджер уточняет детали по проекту, производим бесплатно осмотр и замер помещения</p>
          </div>
      </div>


      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607355653/Component_12_dgu8vc.png" alt="img" />
              <h6>ДОГОВОР</h6>
              <p>Делаем предварительный план расстановки оборудования и подписываем договор на создание проектной документации и визуализации помещения. Срок выполнения: 2 недели.</p>
          </div>
      </div>

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607355651/Component_13_enmdfs.png" alt="img" />
              <h6>ПРОИЗВОДСТВО</h6>
              <p>Делаем предварительный план расстановки оборудования и подписываем договор на создание проектной документации и визуализации помещения. Срок выполнения: 2 недели.</p>
          </div>
      </div>

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607355650/Component_14_ztxgnb.png" alt="img" />
              <h6>МОНТАЖ</h6>
              <p>Выполняем строительно-монтажные работы в помещении, выполняем оснащение оборудованием. Срок выполнения: 2-4 недели.</p>
          </div>
      </div>


      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607355651/Component_15_h4dmig.png" alt="img" />
              <h6>ЗАПУСК</h6>
              <p>Производим тестовый запуск всех систем и оборудования. Устанавливаем вывеску и размещаем менюборды. Срок выполнения 3 дня.</p>
          </div>
      </div>

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607355650/Component_16_bxf9no.png" alt="img" />
              <h6>ОКОНЧАНИЕ</h6>
              <p>Подписываем с вами документы по завершению работ и вводу оборудования в эксплуатацию. Срок выполнения 2 дня.</p>
          </div>
      </div>

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607355651/Component_17_o4tkrz.png" alt="img" />
              <h6>ФОТОСЕССИЯ</h6>
              <p>Выполняем официальный запуск. Делаем фотосессию и видеосъёмку.</p>
          </div>
      </div>

      <div class="steps__block_item">
          <div class="step__item">
              <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607355650/Component_18_pwx10g.png" alt="img" />
              <h6>ОТЗЫВ</h6>
              <p>Благодарим вас за совместную работу и просим написать для нас отзыв на фирменном бланке компании.</p>
          </div>
      </div>

  </div>
</div>
`

let renderHowWeWork = () => {
  document.querySelector(".custom_section").insertAdjacentHTML("beforeend", howWeWorkLayout)
}

export default renderHowWeWork