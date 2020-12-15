const setTemplate = (options) => {
  options.map((opt) => {
    if (opt.bool === true) {
      return opt.func;
    }
  });
};

export default setTemplate;
// export default setTemplate;

