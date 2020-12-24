export default class Functions {
  deleteSpanBuyBtn() {
      document.querySelectorAll("#home>.wrapper>.content-area>.page-section>.container:nth-child(2)>.products>.product-item>.thumbnail>.price_actions>.buttons__container>.add_to_cart>.btn>span").forEach(e => e.parentNode.removeChild(e));
  }
}