import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
            <nav className="nav">
                <a href="#" className="logo">Smart HCLS</a>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link href="#">AboutUs</Link></li>
                    <li><Link to="/search">Search Hospitals</Link></li>
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                </ul>
                <div className="search-box">
                    <input type="text" placeholder="Search here..." />
                    <button>Search</button>
                </div>
            </nav>
        </>
    )
}

export default Header;