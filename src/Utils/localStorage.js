const setThemeToLocalStore = theme => window.localStorage.setItem('theme', JSON.stringify(theme));

const removeThemeFromLocalStore = () => window.localStorage.removeItem('theme')

const getThemeFromLocalStore = () => window.localStorage.getItem('theme')

export { setThemeToLocalStore, removeThemeFromLocalStore, getThemeFromLocalStore }
