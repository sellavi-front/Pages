
if (location.href.includes('/test')) {
  const props = {
    container: document.querySelector("#content > div > div"),
    target: 'beforeend',
  };

  const data = {
    title: '',
    content: ['a','a','a'],
  }

  new Steps(props, data).setTemplate();
}
