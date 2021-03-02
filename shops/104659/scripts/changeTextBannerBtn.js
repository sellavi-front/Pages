
const changeTextBannerBtn = (() => {
  const btnCategory = document.querySelector("#banner0 > div > div > div.owl-item.owl-fade-in > div > div > div > div > div > div > p > a");
  btnCategory.forEach(btn => btn.textContent = 'Каталог');
})


export default changeTextBannerBtn;