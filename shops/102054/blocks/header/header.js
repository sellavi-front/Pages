/*Sticky and colorable header */
let elem = $('header.sticky_trigger');
let doc = $(document);
let scrolled = () => {
  let threshold = doc.scrollTop() > 50;
  elem.toggleClass('scrolled', threshold);
  if(document.querySelector("header").classList.contains("scrolled")) {
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > button").classList.add("scrolled_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(3)").classList.add("scrolled_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(4)").classList.add("scrolled_item")
    document.querySelector("#search > button > i").classList.add("scrolled_item")
    document.querySelector("#cart").classList.add("scrolled_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").classList.add("scrolled_dropdown")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(1)").classList.add("scrolled_dropdown_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(2)").classList.add("scrolled_dropdown_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(3)").classList.add("scrolled_dropdown_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").classList.add("scrolled_dropdown")
  } else {
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > button").classList.add("no_scrolled_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(3)").classList.add("no_scrolled_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(4)").classList.add("no_scrolled_item")
    document.querySelector("#search > button > i").classList.add("no_scrolled_item")
    document.querySelector("#cart").classList.add("no_scrolled_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").classList.add("no_scrolled_dropdown")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(1)").classList.add("no_scrolled_dropdown_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(2)").classList.add("no_scrolled_dropdown_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(3)").classList.add("no_scrolled_dropdown_item")
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").classList.add("no_scrolled_dropdown")
  }
}

let addScrolledHeader = () => {
  $(window).on({ scroll: scrolled })
}

export default addScrolledHeader
