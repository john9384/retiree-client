import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextInput } from "components/Form/TextInput"
import styled, { ThemeProvider } from "styled-components"
import { Button } from "components/Button"
import { H2, SmallText, Text } from "components/Typography"
import { Colors } from "constants/colors"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
import { AUTH_ACTIONS, useAuth } from "contexts/AuthContext"
import { loginUser, registerUser } from "services/authServices"

const schema = yup.object().shape({
  rsaPin: yup
    .string()
    .required("RSA Pin is required")
    .min(4, "RSA Pin must be at least 4 characters"),
  surname: yup.string().required("Surname is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
})

// Define the form's data structure
interface RegisterFormValues {
  rsaPin: string
  surname: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterPage: React.FC = () => {
  const { state, dispatch } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()
  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log("Registration Data:", data)
    dispatch({
      type: AUTH_ACTIONS.SET_LOADING,
      payload: true,
    })
    registerUser(data)
      .then((userData) => {
        console.log("Logged in user:", userData)
        dispatch({
          type: AUTH_ACTIONS.SET_LOADING,
          payload: true,
        })
        navigate("/login")
      })
      .catch((error) => {
        console.error("Login failed:", error)
        dispatch({
          type: AUTH_ACTIONS.SET_LOADING,
          payload: false,
        })
      })
  }

  if (state.isAuthenticated) return <Navigate to="/" />

  return (
    <Container>
      <div>
        <BackLink>
          <ChevronLeft size={20} />
          Back to home
        </BackLink>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Header>
            <H2>Register</H2>
            <Text color={Colors.GREY300}>
              Enter your details to start your pension.
            </Text>
          </Header>
          <TextInput
            label="RSA Pin *"
            placeholder="Enter your RSA Pin"
            {...register("rsaPin")}
            error={errors.rsaPin?.message}
          />
          <TextInput
            label="Surname *"
            placeholder="Enter your surname"
            {...register("surname")}
            error={errors.surname?.message}
          />
          <TextInput
            label="Email Address *"
            placeholder="Enter your email address"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <PasswordRow>
            <TextInput
              label="Password *"
              placeholder="Enter your password"
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />

            <TextInput
              label="Confirm Password *"
              placeholder="Confirm your password"
              type="password"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          </PasswordRow>
          <Button btnType="primary" width="full" paddingY={1.5}>
            Register
          </Button>
          <Text>
            Already have an account or are not a retiree?{" "}
            <LoginLink to="/login">Login here</LoginLink>
          </Text>
        </Form>
      </div>

      <SmallText textAlign="center">
        Powered by StellarSync Technology © 2024 v.1.0.0
      </SmallText>
    </Container>
  )
}

export default RegisterPage

const Container = styled.div`
  height: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding-block: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`
const BackLink = styled.div`
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.grey500};
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  line-height: 1rem;
`
const LoginLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  &:active,
  &:visited {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const PasswordRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
`
