import pages from '../utils/contants/conditions.js';
import renderContactsInCustomSection from './components/contacts.js';

if (pages.main) {

  // renderContactsInCustomSection();

  document.querySelector('.custom_section').insertAdjacentHTML('beforeend', `
    <div class="d-flex flex-wrap justify-content-between">
      <img src="https://ru.sellavi.com/admin/l_out/102864-Ym5oaGJYbG1kbk55Ykc5M2VtUjZSRTA0TDFoSlduSldOR2M5UFE9PQ==" style="margin-right: 100px; max-width: 450px; width: 100%;">
      <div>
        <h4>О нас</h4>
        <p>
        Я сделаю для вас браслет, который станет не просто украшением, а вашим личным талисманом на удачу, помощником эксклюзивного дизайна, из тех камней, которые подходят именно вам: по знаку Зодиака  или иным вашим личным пожеланиям.
        </p>
      </div>
    </div>
  `);

}

