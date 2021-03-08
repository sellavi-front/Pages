const translateBtnInSearch = () => {
  let target = document.querySelector('#search_results');
  const config = {
    childList: true,
  };
  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const btnSearchText = document.querySelector('#search_results > div > a > span');
        const num = btnSearchText.textContent.match(/\d/gi);
        btnSearchText.textContent = `Смотреть все (${num.join('')})`;
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(target, config);
};
export default translateBtnInSearch;
