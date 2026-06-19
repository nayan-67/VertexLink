import axios from "axios"
import { getAuthToken } from "./auth.js"

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim().replace(/\/$/, "")
const baseURL = apiBaseUrl ? `${apiBaseUrl}/api` : "/api"

export const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
})

api.interceptors.request.use((config) => {
  const token = getAuthToken()
  config.headers = config.headers || {}

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    delete config.headers.Authorization
  }

  return config
})

export const getApiErrorMessage = (error, fallback = "Request failed") => {
  const responseData = error?.response?.data

  if (responseData?.message && typeof responseData.message === "string") {
    return responseData.message
  }

  const validationErrors = responseData?.errors
  if (validationErrors && typeof validationErrors === "object") {
    const firstError = Object.values(validationErrors).flat().find((item) => typeof item === "string" && item.trim())
    if (firstError) {
      return firstError
    }
  }

  return fallback
}
