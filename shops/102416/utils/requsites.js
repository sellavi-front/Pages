import {
  setDelivery,
  setPayment,
  setPickup,
} from '../../../modules/Requisites/docs/pay-delivery/templates/templates.js';

const requsites = {
  Организация: 'ИП Орлова Елена Геннадьевна',
  'Юр. Адрес': 'Московская обл., Одинцовский р-н, Город ОДИНЦОВО, Чистяковой ул, 18, кв294',
  ИНН: '410200741740',
  ОГРН: '317410100021660',
  Банк: 'ПАО Сбербанк',
  БИК: '044525225',
  'Рассчетный счет': '40802810738000055321',
  'Корр. Счёт': '30101810400000000225',
  Директор: 'Орлова Елена Геннадьевна',
};

const dataContact = {
  adress: 'Московская обл., Одинцовский р-н, Город ОДИНЦОВО, Чистяковой ул, 18',
  phone: '+7 968-822-88 82',
  city: 'г. Одинцово',
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
