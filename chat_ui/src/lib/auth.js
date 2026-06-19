const TOKEN_KEY = "vertex.token"
const USER_KEY = "vertex.user"

export const getAuthToken = () => {
    if (typeof window === "undefined") return null
    return window.localStorage.getItem(TOKEN_KEY)
}

export const setAuthToken = (token) => {
    if (typeof window === "undefined") return
    window.localStorage.setItem(TOKEN_KEY, token)
}

export const setAuthUser = (user) => {
    if (typeof window === "undefined") return
    window.localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getAuthUser = () => {
    if (typeof window === "undefined") return null
    const raw = window.localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
}

export const clearAuth = () => {
    if (typeof window === "undefined") return
    window.localStorage.removeItem(TOKEN_KEY)
    window.localStorage.removeItem(USER_KEY)
}
