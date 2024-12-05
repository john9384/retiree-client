import { Colors } from "constants/colors"
import { EyeOff, Eye } from "lucide-react"
import React, { useState, forwardRef } from "react"
import styled from "styled-components"

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, type = "text", error = null, onChange, ...rest }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const handleToggleVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e) // Pass the event to parent component/form
      }
    }

    const isPasswordField = type === "password"

    return (
      <Wrapper>
        {label && <Label>{label}</Label>}
        <InputWrapper>
          <Input
            ref={ref}
            hasError={!!error}
            type={isPasswordField && isPasswordVisible ? "text" : type}
            onChange={handleChange}
            {...rest}
          />
          {isPasswordField && (
            <VisibilityToggle onClick={handleToggleVisibility}>
              {isPasswordVisible ? (
                <EyeOff color={Colors.GREY300} />
              ) : (
                <Eye color={Colors.GREY300} />
              )}
            </VisibilityToggle>
          )}
        </InputWrapper>
        {error && <ErrorText>{error}</ErrorText>}
      </Wrapper>
    )
  }
)

TextInput.displayName = "TextInput" // Optional: Name for debugging

// Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  position: relative;
`

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey400};
  font-family: inherit;
`

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 1rem;
  padding-right: 3rem;
  height: 5rem;
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.colors.errorRed : theme.colors.grey200};
  border-radius: 4px;
  font-size: 1.4rem;
  outline: none;
  transition: border-color 0.3s ease;
  font-family: inherit;

  &::placeholder,
  &::-webkit-input-placeholder,
  &:-moz-placeholder,
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.grey100};
    opacity: 1;
  }

  &:focus {
    border-color: ${({ hasError, theme }) =>
      hasError ? theme.colors.errorRed : theme.colors.primary};
  }
`

const VisibilityToggle = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey400};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ErrorText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.errorRed};
  position: absolute;
  bottom: -1.2rem;
  left: 0.5rem;
`
