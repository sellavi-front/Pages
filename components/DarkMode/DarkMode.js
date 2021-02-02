const _hasDarkTheme = () => {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
    localStorage.setItem('theme-checkbox', 'checked');
    body.classList.add('theme-dark');
  } else {
    themeBtn.checked = true;
    localStorage.removeItem('theme');
    body.classList.remove('theme-dark');
  }
};

const setDarkTheme = () => {
  const themeBtn = document.querySelector('header .theme-checkbox');
  const body = document.querySelector('body');

  _hasDarkTheme()
  themeBtn.addEventListener('click', () => _hasDarkTheme());
};

export default setDarkTheme;
