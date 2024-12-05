import styled from "styled-components"
import { Button } from "../../../components/Button"
import { data, Link, useNavigate } from "react-router-dom"
import { useAuth, AUTH_ACTIONS } from "contexts/AuthContext"
import { logoutUser } from "services/authServices"

const Header = () => {
  const { state, dispatch } = useAuth()

  const onLogout = () => {
    dispatch({
      type: AUTH_ACTIONS.SET_LOADING,
      payload: true,
    })
    logoutUser()
      .then(() => {
        dispatch({
          type: AUTH_ACTIONS.LOGOUT,
        })
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location.href = "/"
      })
      .catch((error) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        dispatch({
          type: AUTH_ACTIONS.SET_LOADING,
          payload: false,
        })
        window.location.href = "/"
      })
  }
  return (
    <Topbar>
      <Container>
        <Left>
          <Logo>Logo</Logo>
          <NavList>
            <NavItem>
              <a href="#">About</a>
            </NavItem>
            <NavItem>
              <a href="#how_it_works">How it works</a>
            </NavItem>
          </NavList>
        </Left>
        <Right>
          {!state.isAuthenticated && (
            <>
              <Link to="/register">
                <CTAButton>Register</CTAButton>
              </Link>
              <Link to="/login">
                <CTAButton btnType="secondary">Login</CTAButton>
              </Link>
            </>
          )}
          {state.isAuthenticated && (
            <CTAButton btnType="secondary" onClick={onLogout}>
              Logout
            </CTAButton>
          )}
        </Right>
      </Container>
    </Topbar>
  )
}

const Topbar = styled.div`
  height: 6rem;
  width: 100vw;
  display: flex;
  padding: 0 2rem;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
`

const Container = styled.div`
  max-width: 120rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`
const Right = styled.div`
  display: flex;
  gap: 1rem;
`
const Logo = styled.span`
  font-size: 3.6rem;
  line-height: 1;
`
const NavList = styled.ul`
  display: flex;
  gap: 3.6rem;
  list-style: none;
`
const NavItem = styled.li`
  font-size: 1.4rem;
  line-height: 1.5;
`

const CTAButton = styled(Button)`
  padding: 1.4rem 5rem;
`

export default Header
