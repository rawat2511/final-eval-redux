import { ADMIN, USER } from "./action";


export function setUser() {
    return (
        {
            type: USER,
            payload: "user"
        }
    )
}

export function setAdmin() {
    return (
        {
            type: ADMIN,
            payload: "admin"
        }
    )
}

