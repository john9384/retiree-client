import styled from "styled-components"
import { instructions } from "../instructionList"

interface HowItWorksToggleProps {
  selectedContent: keyof typeof instructions
  setSelectedContent: (content: keyof typeof instructions) => void
}

export const HowItWorksToggle = ({
  selectedContent,
  setSelectedContent,
}: HowItWorksToggleProps) => {
  return (
    <Container>
      <ToggleButton
        isActive={selectedContent === "RETIREE"}
        onClick={() => setSelectedContent("RETIREE")}
      >
        Retiree
      </ToggleButton>
      <ToggleButton
        isActive={selectedContent === "PFA"}
        onClick={() => setSelectedContent("PFA")}
      >
        PFA
      </ToggleButton>
      <ToggleButton
        isActive={selectedContent === "MDA"}
        onClick={() => setSelectedContent("MDA")}
      >
        MDA
      </ToggleButton>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey100};
  padding: 0.8rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
`
const ToggleButton = styled.button<{ isActive: boolean }>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : "transparent"};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.grey400};
  width: 18rem;
  padding: 1rem;
  border-radius: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &hover {
    opacity: 0.5;
  }
`
