import './utils/main.js';
import './pages/main-page.js';
import './pages/innerPages/innerPage.js'

if (document.querySelector('.wrapper')) {
  const logo = document.querySelector(
    '#home > div > header > div.header-wrapper > div.container-fluid > div.logo > a > img',
  );

  logo.setAttribute(
    'src',
    logo
      .getAttribute('src')
      .replace(/\/c_fit,g_center,h_176,q_100,w_430\/c_pad,h_176,w_430\/v1611822634/gi, ''),
  );

  const sellaviLogo = document.querySelector("#sellavi_logo");
  document.querySelector("#home > div > footer > div.footer-widgets > div.container > div").insertAdjacentHTML('beforeend', `<div class="col-md-3">${sellaviLogo.outerHTML}</div>`)
  sellaviLogo.remove()
}

if (location.href.includes('/blog')) {
  document.querySelector("#home > div > div.content-area > section.page-section.titles").remove()
}
