export const removeSelectors = (element) => {
  element.classList.forEach((selector, i) => selector.shift(i, 1))
}