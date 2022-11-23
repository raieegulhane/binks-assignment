import "./navbar.css";

const Navbar = () => {
    return(
        <nav className="navbar-wrapper flex flex-row flex-justify-sb flex-align-cn">
            <div className="navbar-logo flex">
                <i className="fa-brands fa-react"></i>
                <span>React App</span>
            </div>
            <button className="button-logout btn-secondary">Logout</button>
        </nav>
    );
}

export { Navbar };