import { ReactNode } from "react"
import styled from "styled-components"
import RetireeImage from "assets/welcome_img.png"

type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Page>
      <Left>
        <BackgroundImage>
          <Logo>Logo</Logo>
          <img src={RetireeImage} />
        </BackgroundImage>
      </Left>
      <Right>{children}</Right>
    </Page>
  )
}

const Page = styled.div`
  padding: 1rem;
  display: flex;
  height: 100vh;
`
const Left = styled.div`
  height: 100%;
  width: 40rem;
`
const BackgroundImage = styled.div`
  border-radius: 10px;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grey100};
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    bottom: -3rem;
    height: 40rem;
    filter: grayscale(100%);
  }
`

const Logo = styled.span`
  font-size: 3.6rem;
  line-height: 1;
`
const Right = styled.div`
  flex: 1;
`

export default AuthLayout
