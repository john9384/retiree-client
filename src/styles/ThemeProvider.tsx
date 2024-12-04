import * as React from "react"
import { ThemeProvider as OriginalThemeProvider } from "styled-components"
import { themes } from "./themes"

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const colorTheme = themes.color["light"]

  return (
    <OriginalThemeProvider
      theme={{
        colors: colorTheme,
      }}
    >
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  )
}
