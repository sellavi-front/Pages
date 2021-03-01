
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
                  <span>Московская область г. Чехов ул. Судовая 3</span>
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
                  <span>8 906 424 68 88</span>
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
                  <span>multimanic@mail.ru</span>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>`);
  }
}

export default renderContactsInCustomSection
