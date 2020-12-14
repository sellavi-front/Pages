export const collapseShow = (links) => {
  //remove attr href
  links.forEach(a => {
    if (a.closest('li').querySelector('.panel-collapse')){
      a.removeAttribute('href')
    }
  });

  //set listeners and show panel-collapse
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const el = e.target.closest('.flexy')

      el.querySelector('.panel-collapse').classList.toggle('show');
    })
  })
}