const setTemplate = (options) => {
  return options.map((opt) => {
    if (opt.bool === true) {
      console.log('func', opt.func);
      return opt.func;
    }
  });
};

export default setTemplate;
// export default setTemplate;

