let source = document.querySelectorAll(".owl-carousel > div > div > div > div > span > picture > source")
source.forEach(img => {
  let link = img.getAttribute('srcset')
  let newLink = link.replace(/\/c_pad,w_190\/,q_auto:420\/if_end/gi, '')
  img.setAttribute('srcset', newLink)
})
