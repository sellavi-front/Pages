
const data = {
  'Организация' : 'ИП КИРПА ДЕНИС АЛЕКСЕЕВИЧ',
  'Юр. Адрес': 'Российская Федерация, 352430, КРАСНОДАРСКИЙ КРАЙ, КУРГАНИНСКИЙ Р-Н, Г КУРГАНИНСК, УЛ ЛАБИНСКАЯ, дом 203',
  'Почтовый адрес': 'Российская Федерация, 352430, КРАСНОДАРСКИЙ КРАЙ, КУРГАНИНСКИЙ Р-Н, Г КУРГАНИНСК, УЛ ЛАБИНСКАЯ, дом 203',
  'ИНН': '233907718308',
  'ОГРН': '320237500308161',
  'Банк': 'АО «Тинькофф Банк»',
  'Рассчетный счет': '40802810500001669163',
  'Корр. Счёт': '30101810145250000974',
  'БИК': '044525974',
  'Директор': 'КИРПА ДЕНИС АЛЕКСЕЕВИЧ',
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
