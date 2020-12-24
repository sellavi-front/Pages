function displaySecondInfo() {
    document.querySelector('#banner0 > div > div > div > div > div > div > div > div > div > h3').insertAdjacentHTML('afterend', '<div class="second-title">Свежие, уникальные и инновационные дизайны постельного белья премиум класса от лучших производителей Европы</div>');
    document.querySelector('#banner0 > div > div > div:nth-child(2) > div > div > div > div > div > div > h3').insertAdjacentHTML('afterend', '<div class="second-banner-second-text">Комплектование люлек, детских кроваток, спальных мест для подростков</div>');
}

export {displaySecondInfo}