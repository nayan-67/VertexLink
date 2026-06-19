import Echo from "laravel-echo"
import Pusher from "pusher-js"
import { getAuthToken } from "./auth.js"

const reverbKey = import.meta.env.VITE_REVERB_APP_KEY
const reverbHost = import.meta.env.VITE_REVERB_HOST || window.location.hostname
const reverbPort = Number(import.meta.env.VITE_REVERB_PORT || 8080)
const reverbScheme = import.meta.env.VITE_REVERB_SCHEME || "http"
const useTLS = reverbScheme === "https"

window.Pusher = Pusher

const authHeaders = (() => {
    const token = getAuthToken()
    return token ? { Authorization: `Bearer ${token}` } : {}
})()

export const echo = new Echo({
    broadcaster: "reverb",
    key: reverbKey,
    wsHost: reverbHost,
    wsPort: reverbPort,
    wssPort: reverbPort,
    forceTLS: useTLS,
    enabledTransports: ["ws", "wss"],
    authEndpoint: "/broadcasting/auth",
    auth: {
        headers: authHeaders,
    },
})

export const getSocketId = () => echo.socketId()

export const setEchoAuthToken = (token) => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {}

    if (echo.connector?.options?.auth) {
        echo.connector.options.auth.headers = headers
    }

    if (echo.connector?.pusher?.config) {
        echo.connector.pusher.config.auth = {
            ...echo.connector.pusher.config.auth,
            headers,
        }
    }
}
