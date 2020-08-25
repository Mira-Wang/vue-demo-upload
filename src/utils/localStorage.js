const token = 'token'

export function setStorage(key, value) {
    return window.localStorage.setItem(key, JSON.stringify(value))
}

export function getStorage(key) {
    return JSON.parse(window.localStorage.getItem(key))
}

export function getStorageToken() {
    return getStorage(token) || ''
}

export function setStorageToken(data) {
    return setStorage(token, data)
}