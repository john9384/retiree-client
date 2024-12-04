import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/auth/Login"
import RegisterPage from "./pages/auth/Register"
import HomePage from "./pages/HomePage"
import AuthLayout from "./layouts/AuthLayout"
import MainLayout from "./layouts/MainLayout"
import { GlobalStyle } from "./styles/globalStyles"
import { AuthProvider } from "contexts/AuthContext"

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />

          <Route
            path="/login"
            element={
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <RegisterPage />
              </AuthLayout>
            }
          />
        </Routes>
      </Router>
      <GlobalStyle />
    </AuthProvider>
  )
}

export default App
