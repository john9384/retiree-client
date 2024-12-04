import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import styled, { ThemeProvider } from "styled-components"
import { TextInput } from "components/Form/TextInput"
import { H2, SmallText, Text } from "components/Typography"
import { Colors } from "constants/colors"
import { ChevronLeft } from "lucide-react"
import { Button } from "components/Button"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { loginUser } from "services/authServices"
import { BlankPageLoader } from "components/Loaders"
import { AUTH_ACTIONS, useAuth } from "contexts/AuthContext"

// Validation schema using Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
})

// Define form data structure
interface LoginFormValues {
  email: string
  password: string
}

const LoginPage: React.FC = () => {
  const { state, dispatch } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log("Login Data:", data)
    dispatch({
      type: AUTH_ACTIONS.SET_LOADING,
      payload: true,
    })
    loginUser(data)
      .then((userData) => {
        console.log("Logged in user:", userData)
        dispatch({
          type: AUTH_ACTIONS.LOGIN,
          payload: userData,
        })
        localStorage.setItem("token", JSON.stringify(userData.token))
        navigate("/")
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
            <H2>Login</H2>
            <Text color={Colors.GREY300}>
              Enter your details to access your account.
            </Text>
          </Header>
          <TextInput
            label="Email Address *"
            placeholder="XXXXXXX"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <TextInput
            label="Password *"
            placeholder="XXXXXXXXXXX"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <Button btnType="primary" width="full" paddingY={1.5}>
            Login
          </Button>
          <Text>
            Are you a retiree without an account?{" "}
            <LoginLink to="/register">Register here</LoginLink>
          </Text>
        </Form>
      </div>
      <SmallText textAlign="center">
        Powered by StellarSync Technology © 2024 v.1.0.0
      </SmallText>
      {state.isLoading && <BlankPageLoader />}
    </Container>
  )
}

export default LoginPage

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
