import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components";

export const PrivateRoutes = () => {
    const location = useLocation();
    const { authSuccess } = useSelector((state) => state.auth);

    return(
        authSuccess ? (
            <main>
                <Navbar />
                <Outlet />
            </main>
        ) : (
            <Navigate to="/login" state={{ from: location }} replace/>
        )
    );
}