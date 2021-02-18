let productBtnsMain = document.querySelectorAll(".content-area>.page-section>.container>.products>.product-item>.thumbnail>.price_actions")
let productBtnsCategory = document.querySelectorAll(".page-section.with-sidebar>div>div>.content>div>.products>div>.thumbnail>.price_actions")
productBtnsMain.forEach(btn => { btn.classList.remove('d-flex', 'justify-content-between') })
productBtnsCategory.forEach(btn => { btn.classList.remove('d-flex', 'justify-content-between') })
