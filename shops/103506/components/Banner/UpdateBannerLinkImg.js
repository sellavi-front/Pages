let source = document.querySelectorAll(".owl-carousel > div > div > div > div > span > picture > source")
source.forEach(img => {
  let link = img.getAttribute('srcset')
  let newLink = link.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '')
  img.setAttribute('srcset', newLink)
})
