import "./navbar.css";

const Navbar = () => {
    return(
        <nav className="navbar-wrapper flex flex-row flex-justify-sb">
            <h1 className="navbar-heading">React App</h1>
            <button className="button-logout btn-secondary">Logout</button>
        </nav>
    );
}

export { Navbar };