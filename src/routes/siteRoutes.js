import { Routes, Route } from "react-router-dom";
import { UserList, UserDetails } from "../pages";

const SiteRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/user-details/:userId" element={<UserDetails />} />
            {/* <Route path="/login" element={<UserList />} /> */}
        </Routes>
    );
}

export { SiteRoutes };