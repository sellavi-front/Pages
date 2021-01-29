import pages from '../utils/contants/conditions.js';
import renderContactsInCustomSection from './components/contacts.js';

if (pages.main) {

  // renderContactsInCustomSection();

  document.querySelector('.custom_section').insertAdjacentHTML('beforeend', `<div class="container">
    <div class="d-flex justify-content-between flex-wrap">
      <img src="https://res.cloudinary.com/depgheppz/image/upload/v1611932692/102273/Frame_2_m4fgs8.png" style="max-width: 600px; width: 100%;">
      <div style="max-width: 500px; width: 100%;">
        <h4>О нас</h4>
        <p>
        Я сделаю для вас браслет, который станет не просто украшением, а вашим личным талисманом на удачу, помощником эксклюзивного дизайна, из тех камней, которые подходят именно вам: по знаку Зодиака  или иным вашим личным пожеланиям.
        </p>
      </div>
      </div>
    </div>
  `);

}

