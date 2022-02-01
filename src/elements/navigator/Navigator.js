import './navigator.css';
import {Link, useLocation} from "react-router-dom";

export default function Navigator() {
    const location = useLocation()
    return (
        <nav>
            <ul>
                <li className={location.pathname === "/" ? "selected" : ""}><Link to="/">Cubic</Link></li>
                <li className={location.pathname === "/smooth-cubic" ? "selected" : ""}><Link to="/smooth-cubic">Smooth Cubic</Link></li>
                <li className={location.pathname === "/quadratic" ? "selected" : ""}><Link to="/quadratic">Quadratic</Link></li>
                <li className={location.pathname === "/smooth-quadratic" ? "selected" : ""}><Link to="/smooth-quadratic">Smooth Quadratic</Link></li>
                <li className={location.pathname === "/arc" ? "selected" : ""}><Link to="/arc">Arc</Link></li>
            </ul>
        </nav>
    )
}