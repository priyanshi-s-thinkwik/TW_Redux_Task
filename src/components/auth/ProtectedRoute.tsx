import { Navigate, Outlet } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "../helpers/enums";

const ProtectedRoute = () => {
    const user = localStorage.getItem(LOCAL_STORAGE_KEYS.LOGIN_USER);
    
    return user ? <Outlet/>: <Navigate to ="/login" replace/>
}

export default ProtectedRoute;