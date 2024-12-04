import { SmallCaption, SmallText } from "components/Typography"
import styled, { keyframes } from "styled-components"

interface InstructionItemCardProps {
  num: number
  title: string
  description: string
}
export const InstructionItemCard = ({
  num,
  title,
  description,
}: InstructionItemCardProps) => {
  return (
    <Card>
      <NumberSpan>{num}</NumberSpan>
      <ContentBox>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentBox>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  gap: 1.6rem;
`
const NumberSpan = styled.span`
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
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Title = styled(SmallCaption)``
const Description = styled(SmallText)`
  color: ${({ theme }) => theme.colors.grey400};
`
