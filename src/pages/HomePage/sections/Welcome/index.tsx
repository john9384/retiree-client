import styled, { ThemeContext } from "styled-components"
import WelcomeImage from "assets/welcome_img.png"
import { H1, H5, Text } from "../../../../components/Typography"
import { Button } from "../../../../components/Button"
import { useContext } from "react"

export const Welcome = () => {
  return (
    <Container>
      <Left>
        <H1>One Platform, Two Solutions</H1>
        <SubTitle>Simplifying Benefits for Retirees and Employers</SubTitle>
        <Note>
          Whether you're a retiree claiming your benefits or an employer
          submitting employee data for verification, we've got you covered with
          a secure and seamless experience.
        </Note>
        <CTARow>
          <CTAButton>Claim Your Benefits</CTAButton>
          <CTAButton btnType="secondary">Submit Employee Data</CTAButton>
        </CTARow>
      </Left>
      <Right>
        <ImgDiv>
          <img src={WelcomeImage} alt="" />
        </ImgDiv>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100dvh - 60px);
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;
  max-width: 50rem;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubTitle = styled(H5)`
  font-weight: 500;
`
const Note = styled(Text)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.grey500};
`
const CTARow = styled.div`
  display: flex;
  gap: 1rem;
`
const CTAButton = styled(Button)`
  padding: 1rem 2rem;
`
const ImgDiv = styled.div`
  max-width: 50rem;
  img {
    width: 100%;
  }
`
