import { SmallText, Text } from "components/Typography"
import { Colors } from "constants/colors"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <TopDiv>
          <Left>
            <Title>Address</Title>
            <Text color={Colors.WHITE}>
              123 Maple Street, Springfield, IL 62704, Lagos Info About How
            </Text>
          </Left>
          <Right>
            <LinkColumn>
              <Title>Info</Title>
              <Ul>
                <Li>About</Li>
                <Li>How it works</Li>
              </Ul>
            </LinkColumn>
            <LinkColumn>
              <Title>Contact us</Title>
              <Ul>
                <Li>0800-125 -500-6266</Li>
                <Li>info@abcd.com.ng</Li>
              </Ul>
            </LinkColumn>
            <GoUpColumn>
              <ArrowFrame>1</ArrowFrame>
            </GoUpColumn>
          </Right>
        </TopDiv>
        <Divider />
        <BottomDiv>
          <SmallText color={Colors.WHITE}>
            Powered by StellaSync Technollgy 2024
          </SmallText>
          <SmallText color={Colors.WHITE}>v.1.0.0</SmallText>
        </BottomDiv>
      </Container>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.green500};
`
const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  color: white;
  padding-block: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div``
const Description = styled.div``
const Right = styled.div`
  display: flex;
`
const LinkColumn = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const Title = styled(Text)`
  color: white;
  font-weight: 500;
`

const Ul = styled.ul`
  list-style: none;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Li = styled.li``

const GoUpColumn = styled(LinkColumn)``

const ArrowFrame = styled.span`
  display: block;
  min-width: 5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey100};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 500;
`
const Divider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: white;
`
const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
export default Footer
