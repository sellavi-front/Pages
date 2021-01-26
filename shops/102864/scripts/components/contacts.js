import {dataContact} from '../../utils/accuring/requsites.js';

let renderContactsInCustomSection = () => {
  document.querySelector('.page-section.latest-section').insertAdjacentHTML(
    'afterend',
    `
  <div class="contactsSection">
    <div class="container">
        <div class="contacts-title">
          <span>Контакты</span>
        </div>
        <div class="otherInfo">
            <div class="number">
              <div class="number-img">
                  <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610451452/Group_208_ydygyb.png" alt="">
              </div>
              <div class="title-and-number">
                <div class="number-title">
                    <span>Номер телефона</span>
                </div>
                <div class="real-number">
                  <span>${dataContact.phone}</span>
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
                  <span>${dataContact.email}</span>
                </div>
              </div>
            </div>

            <!--<div class="address">
              <div class="address-img">
                  <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1611234408/sellavi/102783/Component_2_mhzrn6.png" alt="">
              </div>
              <div class="title-and-address">
                <div class="address-title">
                      <span>Адрес</span>
                </div>
                <div class="real-address">
                  <span>г. Вязьма ул. Космонавтов 8А</span>
                </div>
              </div>-->
            </div>
        </div>
      </div>
      </div>`,
  );
};

export default renderContactsInCustomSection;
