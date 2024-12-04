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
              {isPasswordVisible ? <EyeOff /> : <Eye />}
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
  margin-bottom: 1rem;
  width: 100%;
`

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey500 || "#333"};
  font-family: inherit;
`

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 1rem;
  padding-right: 3rem; /* Space for the eye icon */
  height: 5rem;
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError
        ? theme.colors.errorRed || "red"
        : theme.colors.grey300 || "#ccc"};
  border-radius: 4px;
  font-size: 1.4rem;
  outline: none;
  transition: border-color 0.3s ease;
  font-family: inherit;

  &:focus {
    border-color: ${({ hasError, theme }) =>
      hasError
        ? theme.colors.errorRed || "red"
        : theme.colors.primary || "#066523"};
  }
`

const VisibilityToggle = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey400 || "#888"};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary || "#066523"};
  }
`

const ErrorText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.errorRed || "red"};
`
