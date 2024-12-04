import styled from "styled-components"

interface TypographyProps {
  color?: string
  textAlign?: "center" | "justify"
}
export const H1 = styled.h1<TypographyProps>`
  font-size: 6rem;
  line-height: 1.25;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`
export const H2 = styled.h2<TypographyProps>`
  font-size: 4.8rem;
  line-height: 1.25;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`
export const H3 = styled.h3<TypographyProps>`
  font-size: 3.6rem;
  line-height: 1.25;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`
export const H4 = styled.h4<TypographyProps>`
  font-size: 3rem;
  line-height: 1.25;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`
export const H5 = styled.h5<TypographyProps>`
  font-size: 2.4rem;
  line-height: 1.25;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`
export const H6 = styled.h6<TypographyProps>`
  font-size: 2rem;
  line-height: 1.25;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`

export const SubHeading = styled.h2<TypographyProps>`
  font-size: 1.8rem;
  line-height: 1.25;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`

export const Text = styled.p<TypographyProps>`
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`

export const SmallText = styled.small<TypographyProps>`
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`

export const SmallCaption = styled.small<TypographyProps>`
  font-size: 1.4rem;
  line-height: 1.25;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`

export const SmallNumber = styled.small<TypographyProps>`
  font-size: 1.4rem;
  line-height: 1.7;
  color: ${({ theme, color }) => color || theme.colors.black};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`
