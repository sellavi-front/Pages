import { setPickup, setPayment, setDelivery } from './templates/templates.js'

const setTemplate = (options) => {
  options.forEach((opt) => {
    if (opt.bool === true) {
      return opt.func;
    }
  });
};

// export default setTemplate;

