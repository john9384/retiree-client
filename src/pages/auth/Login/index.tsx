import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import styled from "styled-components"
import { TextInput } from "components/Form/TextInput"
import { H2, H3, SmallText, Text } from "components/Typography"
import { Colors } from "constants/colors"
import { ChevronLeft } from "lucide-react"
import { Button } from "components/Button"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { loginUser } from "services/authServices"
import { BlankPageLoader } from "components/Loaders"
import { AUTH_ACTIONS, useAuth } from "contexts/AuthContext"

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
})

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
        <BackLink to="/">
          <ChevronLeft size={20} />
          Back to home
        </BackLink>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Header>
            <H3>Login</H3>
            <SmallText color={Colors.GREY400}>
              Enter your details to access your account.
            </SmallText>
          </Header>
          <TextInput
            label="Email Address *"
            placeholder="Enter your email address"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Box>
            <TextInput
              label="Password *"
              placeholder="Enter your password"
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <ForgotLink to="#">Forgot Password?</ForgotLink>
          </Box>
          <SubmitButton btnType="primary" width="full" paddingY={1.5}>
            Login
          </SubmitButton>
          <SmallText color={Colors.GREY400}>
            Are you a retiree without an account?{" "}
            <LoginLink to="/register">Register here</LoginLink>
          </SmallText>
        </Form>
      </div>
      <CopyRight textAlign="center" fontWeight={200}>
        Powered by StellarSync Technology © 2024 v.1.0.0
      </CopyRight>
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
  gap: 1.6rem;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`
const BackLink = styled(Link)`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.grey400};
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  line-height: 1rem;
  cursor: pointer;
`
const LoginLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  &:active,
  &:visited {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`
const ForgotLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  &:active,
  &:visited {
    color: ${({ theme }) => theme.colors.primary};
  }
`
const SubmitButton = styled(Button)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const CopyRight = styled(SmallText)`
  text-align: center;
  color: ${({ theme }) => theme.colors.grey400};
  font-size: 1.2rem;
  font-weight: 200;
`
