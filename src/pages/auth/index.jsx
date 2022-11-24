import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actions as authActions } from "../../redux/features/auth/authSlice";
import "./auth.css";

const Login = () => {
    const navigate = useNavigate();
    const { authMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { updateAuthMessage, handleLogin } = authActions;

    const [loginCredantials, setLoginCredantials] = useState({ username: "", email: "", password: "" });
    const { username, email, password } = loginCredantials;
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const updateLoginCredantials = (event) => {
        const { name, value } = event.target;
        setLoginCredantials((loginCredantials) => ({ ...loginCredantials, [name]: value}))
    }

    const togglePasswordVisibility = (event) => {
        event.stopPropagation()
        setPasswordVisibility((prevPasswordVisibility) => !prevPasswordVisibility);
    }

    const authHandler = () => {
        if (username && email && password) {
            if(email.match(validEmailFormat)) {
                dispatch(handleLogin(loginCredantials));
                navigate("/");
                return;
            }
            return dispatch(updateAuthMessage("Invalid email"));
        }
        dispatch(updateAuthMessage("All fields must be filled."));
    }

    useEffect(() => {
        if (username && email && password) {
            dispatch(updateAuthMessage(""));
        }
    }, [loginCredantials]);

    return(
        <main className="page-wrapper auth-wrapper">
            <header className="page-header">
                <h1>Login</h1>
            </header>

            <form className="auth-form flex flex-col flex-align-cn">
                <label htmlFor="username">
                    <input
                        id="username"
                        className="auth-input"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        required
                        onChange={updateLoginCredantials}
                    />
                </label>
                <label htmlFor="email">
                    <input 
                        id="email"
                        className="auth-input"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        required
                        onChange={updateLoginCredantials}
                    />
                </label>
                <div className="auth-input-password-container flex flex-row flex-justify-sb">
                    <label htmlFor="password">
                        <input
                            id="password"
                            className="auth-input-password" 
                            name="password"
                            type={passwordVisibility ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            required
                            onChange={updateLoginCredantials}
                        />
                    </label>
                    <button 
                        className="password-visibility-button"
                        onClick={togglePasswordVisibility}
                    >
                    {
                        passwordVisibility ?
                        <i className="fa-solid fa-eye-slash"></i> :
                        <i className="fa-solid fa-eye"></i>
                    }
                    </button>
                </div>
                <button 
                    className="auth-button"
                    onClick={authHandler}
                >
                    Login
                </button>
            </form>
            <p className={`auth-message ${authMessage ? "auth-message-visible" : "auth-message-hidden"} flex flex-row`}>
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span>{authMessage}</span>
            </p>
        </main>
    );
}

export { Login };