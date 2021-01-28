const setTemplate = (options) => {
  return options.map((opt) => {
    if (opt.bool === true) {
      return opt.func;
    }
  });
};

export default setTemplate;
// export default setTemplate;

