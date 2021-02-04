import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

if (document.querySelector('.common-home')) {
  let some = `
<div class="container">
<div>
  <span>Наш инстаграм</span>
  <br>
  <span>Получите эстетическое удовольствие</span>
</div>
<br>
  <div class="row">
    <div class="col">
      <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444278/122393926_3332871193463703_632430044848993105_n_ix1ys7.png">
    </div>
    <div class="col">
      <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444279/118702000_168735104783993_414454167277788697_n_qzwtwx.png">
    </div>
    <div class="col">
      <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444282/121780675_973066553157551_397272728753173198_n_ngqdtq.png">
    </div>
    <div class="col">
      <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444284/126316814_398284391223565_2871809762958162410_n_mhfatv.png">
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col">
          <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444424/WhatsApp_Image_2021-02-01_at_09.59_4_kd2uz4.png">
        </div>
        <div class="col">
          <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444428/icons8-%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5_1_panaus.png">
        </div>
        <div class="col">
          589
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
          <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444424/WhatsApp_Image_2021-02-01_at_09.59_4_kd2uz4.png">
        </div>
        <div class="col">
          <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444428/icons8-%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5_1_panaus.png">
        </div>
        <div class="col">
          954
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
          <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444424/WhatsApp_Image_2021-02-01_at_09.59_4_kd2uz4.png">
        </div>
        <div class="col">
          <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444428/icons8-%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5_1_panaus.png">
        </div>
        <div class="col">
          639
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
          <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444424/WhatsApp_Image_2021-02-01_at_09.59_4_kd2uz4.png">
        </div>
        <div class="col">
          <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612444428/icons8-%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5_1_panaus.png">
        </div>
        <div class="col">
          436
        </div>
      </div>
    </div>
  </div>
</div>



<div class="container">
<br>
<div>
  <span>Наши преимущества</span>
  <br>
  <span>Получите эстетическое удовольствие</span>
</div>
<br>

  <div class="row">
    <div class="col">
      <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612445098/Frame_vbx8ci.png">
    </div>
    <div class="col">
      <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612445098/Frame_1_l0jgl3.png">
    </div>
    <div class="col">
      <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612445100/Frame_2_bg7kab.png">
    </div>
    <div class="col">
      <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1612445101/Frame_3_ykm90w.png">
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col">
        Полностью собственное производство
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
        Только качественные материалы
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
        Вы можете заказать свой собственный дизайн
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
        У нас есть гарантия
        </div>
      </div>
    </div>
  </div>
</div>`;

document.querySelector('.custom_section').insertAdjacentHTML('afterbegin', some);
}

if (document.querySelector('.header-wrapper')) {
  const oldNav = document.querySelector('.nav.sf-menu');
  const newNav = oldNav.cloneNode(true);
  document.querySelector('.logo').insertAdjacentHTML('beforebegin', newNav.outerHTML);
  oldNav.remove();
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'Название организации');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'Название организации', media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'Название организации',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'Название организации',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}