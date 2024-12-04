import apiClient from "../utils/apiClient"

export const registerUser = async (data) => {
  const response = await apiClient.post("/auth/register", data)
  return response.data
}

export const loginUser = async (data) => {
  const response = await apiClient.post("/auth/login", data)
  return response.data
}
export const logoutUser = async () => {
  const token = localStorage.getItem("token")
  const response = await apiClient.post("/auth/logout", {
    headers: { Authorization: "Bearer " + token },
  })
  return response.data
}
