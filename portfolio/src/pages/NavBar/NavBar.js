import { Link } from "react-router-dom";

export default function NavBar(){
    return(
    <>
        <Link to={'/'}>Home</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/resume'}>Resume</Link>
    </>
    )
}