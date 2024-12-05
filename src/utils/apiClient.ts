import axios from "axios"

const apiClient = axios.create({
  baseURL: import.meta.env.REACT_APP_API_BASE_URL + "/api/v1",
  headers: { "Content-Type": "application/json" },
})

export default apiClient
