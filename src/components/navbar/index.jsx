import { useDispatch } from "react-redux";
import { actions as authActions } from "../../redux/features/auth/authSlice";
import "./navbar.css";

const Navbar = () => {
    const { handleLogout } = authActions;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(handleLogout());
    }

    return(
        <nav className="navbar-wrapper flex flex-row flex-justify-sb flex-align-cn">
            <div className="navbar-logo flex">
                <i className="fa-brands fa-react"></i>
                <span>React App</span>
            </div>
            <button 
                className="button-logout btn-secondary"
                onClick={logoutHandler}
            >
                Logout
            </button>
        </nav>
    );
}

export { Navbar };