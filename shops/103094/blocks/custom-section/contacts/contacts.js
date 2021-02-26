
let renderContactsInCustomSection = () => {
  if (document.querySelector('.common-home')) {
    document.querySelector('.custom_banner').insertAdjacentHTML('afterend', `
  <div class="contactsSection">
    <div class="container">
        <div class="contacts-title">
          <span>Контакты</span>
        </div>
        <div class="otherInfo">
        <div class="address">
              <div class="address-img">
                  <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612438363/sellavi/103094/Component_1_pjianz.png" alt="">
              </div>
              <div class="title-and-address">
                <div class="address-title">
                      <span>Адрес</span>
                </div>
                <div class="real-address">
                  <span><a href="https://yandex.ru/maps/10761/chehov/house/sadovaya_ulitsa_3/Z04YcgBmSkAAQFtvfX11c3lgYQ==/?ll=37.476357%2C55.142535&z=17.56" target="_blank" style="font-weight: 700">Московская область г. Чехов ул. Судовая 3</a></span>
                </div>
              </div>
            </div>

            <div class="number">
              <div class="number-img">
                  <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612438387/sellavi/103094/Group_208_mekk0y.png" alt="">
              </div>
              <div class="title-and-number">
                <div class="number-title">
                    <span>Номер телефона</span>
                </div>
                <div class="real-number">
                  <span><a href="tel:+79064246888">+7(906)424-68-88</a></span>
                </div>
              </div>
            </div>

            <div class="email">
              <div class="email-img">
                  <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612438423/sellavi/103094/Group_209_yeoxao.png" alt="">
              </div>
              <div class="title-and-email">
                <div class="email-title">
                      <span>Почтовый адрес</span>
                </div>
                <div class="real-email">
                  <span><a href="mailto:multimanic@mail.ru">multimanic@mail.ru</a></span>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>`);
  }
}

export default renderContactsInCustomSection
