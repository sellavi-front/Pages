// const data = {
//   ogranization: '',
//   orgAdress: '',
//   mailAdress: '',
//   regAdress: '',
//   inn: '',
//   kpp: '',
//   ogrn: '',
//   bankName: '',
//   accountNumber: '',
//   corrNumber: '',
//   bik: '',
//   director = '',
// }

export default class Requisites {
  constructor(obj) {
    this.obj = obj;
    this.container = document.querySelector('.requsitess');;
  }

  setData() {
    this.obj.forEach((item) => {
      return `
          <p class="requsites__elem">
            Название: <span>${Object.values(item)}</span>
          </p>`;
    });
  }
  setTemplate() {
    this.container.insertAdjacentHTML(
      'afterbegin',
      t`
        <div class="requsites__data">
          <h4 class="requsites__title">Реквизиты продавца</h4>
          ${this.setData()}
        </div>`,
    );
  }
}

if (location.href.includes('term-of-use')) {
  const data = {
    ogranization: 'ИП ЩЕРБАКОВ АЛЕКСАНДР СЕРГЕЕВИЧ',
    orgAdress: 'г. Екатеринбург, ул. Щербакова 4 офис 302',
    mailAdress: 'г. Екатеринбург, ул. Щербакова 4 офис 302',
    inn: '667105593531',
    ogrn: '317665800123460',
    bankName: 'УРАЛЬСКИЙ БАНК ПАО СБЕРБАНК',
    accountNumber: '40802810016540071804',
    corrNumber: '30101810500000000674',
    bik: '046577674',
    director: 'ЩЕРБАКОВ АЛЕКСАНДР СЕРГЕЕВИЧ',
  }

  const req = new Requisites(data);

  req.setTemplate();
}
