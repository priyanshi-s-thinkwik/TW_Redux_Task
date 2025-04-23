import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const user = localStorage.getItem('loginUser');
    console.log('user', user);
    
    return user ? <Outlet/>: <Navigate to ="/login" replace/>
}

export default ProtectedRoute;