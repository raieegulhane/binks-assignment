import { Routes, Route } from "react-router-dom";
import { UserList, UserDetails, Login } from "../pages";
import { PrivateRoutes } from "./privateRoutes";

const SiteRoutes = () => {
    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoutes />}>
                <Route path="/" element={<UserList />} />
                <Route path="/user-list" element={<UserList />} />
                <Route path="/user-details/:userId" element={<UserDetails />} />
            </Route>
        </Routes>
    );
}

export { SiteRoutes };