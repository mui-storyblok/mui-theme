const setThemeToLocalStore = theme => window.localStorage.setItem('theme', JSON.stringify(theme));

export { setThemeToLocalStore }
