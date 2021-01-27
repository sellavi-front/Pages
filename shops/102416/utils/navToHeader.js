function navToHeader() {
    const oldNav = document.querySelector('.nav.sf-menu');
    const newNav = oldNav.cloneNode(true);
    document.querySelector('.logo').insertAdjacentHTML('afterend', newNav.outerHTML);
    oldNav.remove();
}

export {navToHeader}