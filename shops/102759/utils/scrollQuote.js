
window.addEventListener('scroll', (e) => {
  const elHeight = document.querySelector('.quote').getBoundingClientRect().height;
  const el = document.querySelector('.quote');
  const windowHeight = window.innerHeight
  const halfHeight = Math.floor(windowHeight / 2);
  let stopEl = document.querySelector("#home > div > div.content-area > div.gallery.d-flex.flex-column > div:nth-child(2)").getBoundingClientRect().top;
  let stopDot = stopEl - elHeight - 100;
  const par = el.closest('div');
  if (par.getBoundingClientRect().top >= 0 && par.getBoundingClientRect().top <= par.getBoundingClientRect().height) {

  if (Math.floor(el.getBoundingClientRect().top) >= Math.floor(halfHeight) - 10 && Math.floor(el.getBoundingClientRect().top) <= Math.floor(halfHeight) + 10) {
      el.style.cssText = `
          top: ${(windowHeight / 2) - (elHeight / 2)}px;
          right: 4%;
          position: fixed;
          margin: 0;
      `
  } if (Math.floor(stopEl) == Math.floor(windowHeight - elHeight)) {
  console.log(123)
      el.style.cssText = `
          position: absolute;
          bottom: 0;
      `
  }}
  })