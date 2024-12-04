import { themes } from "./themes"

export type ThemeKeyType = keyof typeof themes.color | "system"

export interface ThemeState {
  selected: ThemeKeyType
}
