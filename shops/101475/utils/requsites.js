import {
  setDelivery,
  setPayment,
  setPickup,
} from '../../../modules/Requisites/docs/pay-delivery/templates/templates.js';

const requsites = {
  'Организация': 'ИП Карапетян Ирина Олеговна',
  'Юр. Адрес': '644046, г. Омск, ул. Панфилова 14 кв45',
  'ИНН': '550609368780',
  'ОГРНИП': '319554300089387',
  'Банк': 'ПАО Сбербанк',
  'БИК': '045209673',
  'Рассчетный счет': '40817810845000072696',
  'Корр. Счёт': '30101810900000000673',
  'Директор': 'Карапетян Ирина Олеговна',
};

const dataContact = {
  adress: 'г. Омск, ул. Панфилова 14 кв45',
  phone: '+7 968-822-88 82',
  city: 'г. Омск',
  timeWork: 'с 9 до 21',
};

const options = [
  {
    bool: false,
    func: setPickup(dataContact),
  },
  {
    bool: true,
    func: setDelivery(dataContact),
  },
  {
    bool: true,
    func: setPayment(),
  },

];

export { requsites, dataContact, options };
