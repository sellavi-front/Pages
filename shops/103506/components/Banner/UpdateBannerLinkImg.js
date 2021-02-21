let source = document.querySelectorAll(".owl-carousel > div > div > div > div > span > picture > source")
source.forEach(img => {
  let link = img.getAttribute('srcset')
  let newLink = link.replace('/c_pad,w_1900/', '')
  console.log(newLink)
  img.setAttribute('srcset', newLink)
})
