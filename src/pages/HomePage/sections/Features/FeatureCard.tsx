import { H5, H6, Text } from "components/Typography"
import styled from "styled-components"
interface FeatureCardProps {
  icon: string
  title: string
  note: string
}

export const FeatureCard = ({ icon, title, note }: FeatureCardProps) => {
  return (
    <Card>
      <Icon>
        <img src={icon} alt="" />
      </Icon>
      <Box>
        <Title>{title}</Title>
        <Note>{note}</Note>
      </Box>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  background-color: white;
  border-radius: 10px;
  padding: 3rem;
  height: 30rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.01);
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Icon = styled.div`
  width: 4rem;
`
const Title = styled(H6)`
  font-size: 1.6rem;
  font-weight: 700;
`
const Note = styled(Text)`
  color: ${({ theme }) => theme.colors.grey400};
  font-size: 1.4rem;
`
