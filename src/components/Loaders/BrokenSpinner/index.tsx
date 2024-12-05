import { Colors } from "constants/colors"
import { Audio } from "react-loader-spinner"
import styled from "styled-components"

interface Props {
  text?: string
}

export const BrokenSpinner: React.FC<Props> = ({ text }) => {
  return (
    <Wrapper>
      <Audio
        height="80"
        width="80"
        color={Colors.PRIMARY}
        ariaLabel="loading"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
