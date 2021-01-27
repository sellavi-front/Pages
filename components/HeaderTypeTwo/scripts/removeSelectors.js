export const removeSelectors = (element) => {
  element.classList.forEach((selector, i, arr) => arr.splice(1, arr.length))
}