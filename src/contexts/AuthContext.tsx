import { BlankPageLoader, OverlayLoader } from "components/Loaders"
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react"
import type { IUser } from "types/User"

// Initial state for the auth context
const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
}

export const AUTH_ACTIONS = {
  SET_LOADING: "SET_LOADING",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
}

// Reducer function to handle state updates
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      localStorage.setItem("user", JSON.stringify(action.payload))
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      }
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      }
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

// Create the Auth context
const AuthContext = createContext({
  state: initialState,
  dispatch: (...args) => {},
})

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")
    if (token && userData) {
      dispatch({ type: AUTH_ACTIONS.LOGIN, payload: userData })
    }

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (isLoading) return <BlankPageLoader />

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use Auth context
export const useAuth = () => useContext(AuthContext)
