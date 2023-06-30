import { Link } from "react-router-dom";
import './navbar.css'

export default function NavBar(){
    return(
    <div className="nav">
        <Link to={'/'} className="navLink">Home</Link>
        <Link to={'/about'} className="navLink">About</Link>
        <Link to={'/projects'} className="navLink">Projects</Link>
        <Link to={'/resume'} className="navLink">Resume</Link>
        <Link to={'/personal'} className="navLink">Personal</Link>
    </div>
    )
}