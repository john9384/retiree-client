import { Colors } from "constants/colors"

export const lightThemeColors = {
  primary: Colors.PRIMARY,
  green500: Colors.GREEN500,
  green700: Colors.GREEN700,
  secondary: Colors.SECONDARY,
  white: Colors.WHITE,
  black: Colors.BLACK,
  errorRed: Colors.ERROR_RED,
  appBG: Colors.APP_BG,
  grey000: Colors.GREY000,
  grey100: Colors.GREY100,
  grey200: Colors.GREY200,
  grey300: Colors.GREY300,
  grey400: Colors.GREY400,
  grey500: Colors.GREY500,
}

export const darkThemeColors = {
  primary: Colors.PRIMARY,
  green500: Colors.GREEN500,
  green700: Colors.GREEN700,
  secondary: Colors.SECONDARY,
  white: Colors.GREY000,
  black: Colors.BLACK,
  errorRed: Colors.ERROR_RED,
  appBG: Colors.GREY500,
  grey000: Colors.BLACK,
  grey100: Colors.GREY500,
  grey200: Colors.GREY400,
  grey300: Colors.GREY300,
  grey400: Colors.GREY200,
  grey500: Colors.GREY100,
}

export const themes = {
  color: {
    light: lightThemeColors,
    dark: darkThemeColors,
  },
}
