const setTemplate = (options) => {
  console.log('options', options);
  options.forEach((opt) => {
    if (opt.bool === true) {
      return opt.func;
    }
  });
};

export default setTemplate;
// export default setTemplate;

