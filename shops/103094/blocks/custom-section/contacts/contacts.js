
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
                  <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1611234408/sellavi/102783/Component_2_mhzrn6.png" alt="">
              </div>
              <div class="title-and-address">
                <div class="address-title">
                      <span>Адрес</span>
                </div>
                <div class="real-address">
                  <span>г. Екатеринбург ул. Счастливая 8 офис 2</span>
                </div>
              </div>
            </div>

            <div class="number">
              <div class="number-img">
                  <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610451452/Group_208_ydygyb.png" alt="">
              </div>
              <div class="title-and-number">
                <div class="number-title">
                    <span>Номер телефона</span>
                </div>
                <div class="real-number">
                  <span>+7 912 683-45-03</span>
                </div>
              </div>
            </div>

            <div class="email">
              <div class="email-img">
                  <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610451450/Group_209_ye2yi4.png" alt="">
              </div>
              <div class="title-and-email">
                <div class="email-title">
                      <span>Почтовый адрес</span>
                </div>
                <div class="real-email">
                  <span>zali-shopping@mail.ru</span>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>`);
  }
}

export default renderContactsInCustomSection
