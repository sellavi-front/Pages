import { setPickup, setPayment, setDelivery } from './templates/templates.js'

const setTemplate = (options) => {
  options.forEach((opt) => {
    if (opt.bool === true) {
      console.log(opt.func);
    }
  });
};

// export default setTemplate;

