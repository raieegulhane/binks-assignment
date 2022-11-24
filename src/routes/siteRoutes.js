import { Routes, Route } from "react-router-dom";
import { UserList, UserDetails, Login, PageNotFound } from "../pages";
import { PrivateRoutes } from "./privateRoutes";

const SiteRoutes = () => {
    return(
        <Routes>
            <Route path="*" element={<PageNotFound />} />
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