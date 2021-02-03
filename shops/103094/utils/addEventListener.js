let addClassNameListener = (element, callback) => {
  let elem = document.querySelector(element);
  let lastClassName = elem.className;
  window.setInterval( function() {
    let className = elem.className;
    if (className !== lastClassName) {
      callback();
      lastClassName = className;
    }
  },10);
}


export default addClassNameListener