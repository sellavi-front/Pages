const _removeTheme = () => {
  localStorage.removeItem('theme');
  document.querySelector('body').classList.remove('dark-mode');
};

const _setTheme = (btn) => {
  localStorage.setItem('theme', 'dark');
  document.querySelector('body').classList.add('dark-mode');
};

const _hasTheme = (btn) => {
  if (!localStorage.getItem('theme')) {
    _setTheme(btn);
  } else if (
    localStorage.getItem('theme') === 'dark' &&
    !document.querySelector('body').classList.contains('dark-mode')
  ) {
    _setTheme(btn);
    btn.checked = true;
  } else {
    _removeTheme();
  }
};

const setDarkTheme = () => {
  const themeBtn = document.querySelector('.button__list_elem .theme-checkbox');
  _hasTheme();
  themeBtn.addEventListener('input', () => _hasTheme(themeBtn));
};

export default setDarkTheme;
