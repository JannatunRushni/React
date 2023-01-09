import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User =() => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        userContext.setUser({
            name: 'World',
            email: 'world@eample.com'
         })
  
    }
    const handleLogout = () => {
        userContext.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User eamil is {userContext.user?.email}</div>
        </div>
    )
}