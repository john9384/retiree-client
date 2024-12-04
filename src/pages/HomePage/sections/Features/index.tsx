import styled from "styled-components"
import { FeatureCard } from "./FeatureCard"
import { featuresList } from "./featuresList"
import { H2, Text } from "components/Typography"

export const BusinessFeatures = () => {
  return (
    <SectionBackground>
      <Container>
        <Title>
          <span>Retiree data processing</span>
          <GreenText>made easy!</GreenText>
        </Title>

        <FeaturesGrid>
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              note={feature.note}
            />
          ))}
        </FeaturesGrid>
      </Container>
    </SectionBackground>
  )
}

const SectionBackground = styled.section`
  background-color: ${({ theme }) => theme.colors.grey100};
  padding-block: 10rem;
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

const Title = styled(H2)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`
const GreenText = styled.span`
  color: ${({ theme }) => theme.colors.green500};
  display: block;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  row-gap: 4rem;
  margin-top: 4rem;
`
