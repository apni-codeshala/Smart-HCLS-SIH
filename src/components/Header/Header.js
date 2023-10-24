import "./Header.css"
import { Link } from "react-router-dom"
import logo from '../../Assets/logos/DecideTreat Logo - Original with Transparent Background - 5000x5000.png'
const Header = () => {

    return (
        <>
            <nav className="nav">
            <Link className="logo" to="/">
      <img src={logo} alt="Logo" />
    </Link>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">AboutUs</Link></li>
                    <li><Link to="/search">Search Hospitals</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
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