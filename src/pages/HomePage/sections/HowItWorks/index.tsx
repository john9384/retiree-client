import { useState } from "react"
import { instructions } from "./instructionList"
import styled, { keyframes } from "styled-components"
import { HowItWorksToggle } from "./HowItWorksToggle"
import { InstructionItemCard } from "./InstructionItemCard"
import { H2, SmallCaption } from "components/Typography"
import { Colors } from "constants/colors"
import File9 from "assets/file9.png"
import File11 from "assets/file11.png"

export const HowItWorks = () => {
  const [selectedContent, setSelectedContent] =
    useState<keyof typeof instructions>("RETIREE")

  return (
    <Section>
      <ImgDivLeft>
        <img src={File11} alt="" className="left-img" />
      </ImgDivLeft>
      <Content>
        <Box>
          <Title>
            How it
            <span> works</span>
          </Title>
          <SmallCaption color={Colors.GREY400}>
            Follow these easy steps to get started
          </SmallCaption>
        </Box>
        <HowItWorksToggle
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
        />
        {/* Key prop ensures the component remounts and animation restarts */}
        <Instructions key={selectedContent}>
          {instructions[selectedContent].list.map((item, index) => (
            <InstructionItemCard
              key={index}
              num={index + 1}
              title={item.title}
              description={item.description}
            />
          ))}
        </Instructions>
      </Content>
      <ImgDivRight>
        <img src={File9} alt="" className="right-img" />
      </ImgDivRight>
    </Section>
  )
}

const Section = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Title = styled(H2)`
  font-size: 4rem;
  font-weight: 700;
  span {
    color: ${({ theme }) => theme.colors.green500};
  }
`

const Content = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-between;
  align-items: center;
  padding-block: 7rem;
  flex: 2;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  animation: ${fadeIn} 1s ease-in-out;
`

const ImgDivLeft = styled.div`
  height: 30rem;
  width: 50rem;
  display: flex;
  img {
    /* width: 40rem; */
  }
`

const ImgDivRight = styled.div`
  width: 50rem;
  height: 30rem;
  display: flex;
  justify-content: flex-end;
  img {
    /* width: 30rem; */
  }
`
