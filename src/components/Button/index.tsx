import styled from "styled-components"

export const Button = (props: ButtonProps) => {
  const { children } = props
  return <BtnComponent {...props}>{children}</BtnComponent>
}

interface ButtonProps {
  children: React.ReactNode | string
  onClick?: () => void
  btnType?: "primary" | "secondary" | "tetiary"
  width?: "content" | "full"
  height?: "content" | "full"
  padding?: number
  paddingX?: number
  paddingY?: number
}

const BtnComponent = styled.button<ButtonProps>`
  background-color: ${({ theme, btnType }) => {
    switch (btnType) {
      case "primary":
        return theme.colors.primary
      case "secondary":
        return theme.colors.white
      default:
        return theme.colors.primary
    }
  }};

  color: ${({ theme, btnType }) => {
    switch (btnType) {
      case "primary":
        return theme.colors.white
      case "secondary":
        return theme.colors.primary
      default:
        return theme.colors.white
    }
  }};

  border: 1px solid
    ${({ theme, btnType }) => {
      switch (btnType) {
        case "primary":
          return theme.colors.white
        case "secondary":
          return theme.colors.primary
        default:
          return theme.colors.white
      }
    }};

  padding: ${({ padding }) => (padding ? `${padding}rem` : "0")};
  padding-inline: ${({ paddingX }) => (paddingX ? `${paddingX}rem` : "0")};
  padding-block: ${({ paddingY }) => (paddingY ? `${paddingY}rem` : "0")};
  width: ${({ width }) => {
    switch (width) {
      case "content":
        return "fit-content"
      case "full":
        return "100%"
      default:
        return width ? `${width}rem` : "auto"
    }
  }};
  height: ${({ height }) => {
    switch (height) {
      case "content":
        return "fit-content"
      case "full":
        return "100%"
      default:
        return height ? `${height}rem` : "auto"
    }
  }};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  cursor: pointer;

  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
