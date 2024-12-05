import { SmallText, Text } from "components/Typography"
import { Colors } from "constants/colors"
import { ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <TopDiv>
          <Left>
            <Title>Address</Title>
            <Text color={Colors.WHITE} fontWeight={200}>
              123 Maple Street, Springfield, IL 62704, Lagos
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
              <ArrowFrame to="#welcome">
                <ArrowUp color={Colors.GREEN700} />
              </ArrowFrame>
            </GoUpColumn>
          </Right>
        </TopDiv>
        <Divider />
        <BottomDiv>
          <SmallText color={Colors.WHITE} fontWeight={200}>
            Powered by StellaSync Technollgy 2024
          </SmallText>
          <SmallText color={Colors.WHITE}>v.1.0.0</SmallText>
        </BottomDiv>
      </Container>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
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
  padding: 2rem 0 3rem 0;
`
const Left = styled.div``
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
const Li = styled.li`
  font-size: 1.4rem;
  font-weight: 200;
`

const GoUpColumn = styled(LinkColumn)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const ArrowFrame = styled(Link)`
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
  background-color: white;
`
const Divider = styled.div`
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
