const changeTextCategoryBtn = () => {
  const btnCategory = document.querySelectorAll(
    '.common-home > div > div.content-area > section.page-section.homefeatured_category > div > div > div > div > div > a > div > div > div > span',
  );
  btnCategory.forEach((btn) => (btn.textContent = 'Подробнее'));
};

export default changeTextCategoryBtn;
