const setTemplate = (options) => {
  return options.map((opt) => {
    console.log('func', opt.func);
    if (opt.bool === true) {
      return opt.func;
    }
  });
};

export default setTemplate;
// export default setTemplate;

