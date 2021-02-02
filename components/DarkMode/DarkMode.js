

const _removeTheme = () => {
  localStorage.removeItem('theme');
  document.querySelector('body').classList.remove('dark-mode');
};

const _setTheme = () => {
  localStorage.setItem('theme', 'dark');
  document.querySelector('body').classList.add('dark-mode');
};

const _hasTheme = (btn) => {
  if (!btn.checked && localStorage.getItem('theme') === 'dark') {
    _setTheme();
    btn.checked = true;
  } else {
    _removeTheme()
  }
};

const setDarkTheme = () => {
  const themeBtn = document.querySelector('.button__list_elem .theme-checkbox');
  themeBtn.addEventListener('input', () => _hasTheme(themeBtn));
}

export default setDarkTheme;
