import { Link } from "react-router-dom";
import './navbar.css'

export default function NavBar(){
    return(
    <div className="nav">
        <Link to={'/'}>Home</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/resume'}>Resume</Link>
        <Link to={'/personal'}>Personal</Link>
    </div>
    )
}