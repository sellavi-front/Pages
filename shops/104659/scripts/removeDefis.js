const removeDefis = () => {
  const listt = document.querySelectorAll('.flexy .panel-collapse > ul > li > a');
  listt.forEach((el) => {
    const tr = el.textContent;

    if (tr.includes(' - ')) {
      el.textContent = tr.slice(2);
    }
  });
};

export default removeDefis;
