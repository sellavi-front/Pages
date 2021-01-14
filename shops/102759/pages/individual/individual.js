
if (location.href.includes('/individual')) {
  const lastSection = document.querySelector('#content > .row > div');

  const pageHeader = document.querySelector(".page-header > h1");
  pageHeader.textContent = 'Пошив одежды на заказ';
  pageHeader.insertAdjacentHTML('afterend', `<p class="page-header__subtitle">Действительно качественный пошив вашей одежды</p>`)
}