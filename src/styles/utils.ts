import { ThemeKeyType } from "./types"

/* istanbul ignore next line */
export const isSystemDark = window?.matchMedia
  ? window.matchMedia("(prefers-color-scheme: light)")?.matches
  : undefined

export function saveTheme(theme: ThemeKeyType) {
  window.localStorage && localStorage.setItem("selectedTheme", theme)
}

/* istanbul ignore next line */
export function getThemeFromStorage(): ThemeKeyType | null {
  return window.localStorage
    ? (localStorage.getItem("selectedTheme") as ThemeKeyType) || null
    : null
}
