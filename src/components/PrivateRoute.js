import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRoute = () => {
    const user = useSelector(state => state.user.currentUser);
    return user ? <Outlet /> : <Navigate to="/login" />;
}


export default PrivateRoute;
