import { useState } from "react";
import "./auth.css";

const Login = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility((prevPasswordVisibility) => !prevPasswordVisibility);
    }

    return(
        <main className="page-wrapper auth-wrapper">
            <header className="page-header">
                <h1>Login</h1>
            </header>

            <form className="auth-form flex flex-col flex-align-cn">
                <label htmlFor="username">
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Username"
                        required
                    />
                </label>
                <label htmlFor="email">
                    <input 
                        className="auth-input"
                        type="email"
                        placeholder="Email"
                        required
                    />
                </label>
                <div className="auth-input-password-container flex flex-row flex-justify-sb">
                    <label htmlFor="password">
                        <input
                            className="auth-input-password" 
                            type={passwordVisibility ? "text" : "password"}
                            placeholder="Password"
                            required
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
                <button className="auth-button">
                    Login
                </button>
            </form>
        </main>
    );
}

export { Login };