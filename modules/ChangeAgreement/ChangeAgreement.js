const ChangeAgreement = () => {
  if (location.href.includes("checkout")) {
    const checkbox = document.querySelector('.checkbox>label');
    checkbox.textContent = 'Согласен (-а) с условиями <a href="/terms-of-use/" style="text-decoration: none !important;"><b>Публичной оферты</b></a>';
  }
};

module.exports = ChangeAgreement;
