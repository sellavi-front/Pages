
const data = {
  'Организация' : 'ИП ЩЕРБАКОВ АЛЕКСАНДР СЕРГЕЕВИЧ',
  'Юр. Адрес': 'г. Екатеринбург, ул. Щербакова 4 офис 302',
  'Почтовый адрес': 'г. Екатеринбург, ул. Щербакова 4 офис 302',
  'ИНН': '667105593531',
  'ОГРН': '317665800123460',
  'Банк': 'УРАЛЬСКИЙ БАНК ПАО СБЕРБАНК',
  'Рассчетный счет': '40802810016540071804',
  'Корр. Счёт': '30101810500000000674',
  'БИК': '046577674',
  'Директор': 'ЩЕРБАКОВ АЛЕКСАНДР СЕРГЕЕВИЧ',
};

if (location.href.includes('term-of-use')) {
  const req = new Requisites(data, 'afterbegin');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(data, 'afterend', media);
  req.setTemplate();
}
