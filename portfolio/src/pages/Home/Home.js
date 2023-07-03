import "./home.css";
import drake from '../../images/drake.jpeg'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main">
    <img src={drake} alt="drake" height={"300px"} width={"300px"}/>
    <div className="home">
      <h1> Hi, I'm Greg!</h1>
      <h3>Software Engineer</h3>
      <h3>Outdoor Enthusiast</h3>
      <h3>Problem Solver</h3>
      <Link to={'/about'}>About Me ➡️</Link>
    </div>
    </div>
    )
}
