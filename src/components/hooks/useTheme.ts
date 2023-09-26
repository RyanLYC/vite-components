export type ThemeType = 'dark' | 'light'

const ThemeClassList = ['theme-dark', 'theme-light']

export const changeThemeClass = (el: HTMLElement, theme: ThemeType = 'light') => {
  if (!el) return
  const finalTheme = theme.toLowerCase()
  const themeClassName = `theme-${theme}`
  el.setAttribute('data-theme', finalTheme)
  ThemeClassList.forEach((className) => {
    if (className === themeClassName) {
      el.classList.add(className)
    } else {
      el.classList.remove(className)
    }
  })
}

export const useTheme = (theme: ThemeType = 'light') => {
  changeThemeClass(document.body, theme)
  // appTheme.value = theme
  // localStorage.setItem('current-app-theme', theme)
}

// export const useStorageTheme = (theme: ThemeType = 'light') => {
//   const cacheTheme = localStorage.getItem('current-app-theme') as ThemeType
//   useTheme(theme || cacheTheme || 'light')
// }

// const appTheme = ref('')

// export default appTheme
