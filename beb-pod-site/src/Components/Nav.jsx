import { Link } from "react-router-dom";

function Nav() {
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
    </nav>
}

export default Nav;