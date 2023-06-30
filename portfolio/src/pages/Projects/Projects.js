import fetch from "../../images/fetch.png";
import clowns from "../../images/clowning.png";
import recipe from "../../images/recipe.png";
import blackjack from "../../images/blackjack.png";
import "./projects.css";

export default function Projects() {
  return (
    <div>
      {/* <h1>Projects</h1> */}
      {/* <p>
        While completing my Boot-camp with General Assembly I was able to work
        on Four projects, Two were individual projects and Two were Group
        projects. Check them out Below!
      </p> */}

      <a href="https://clowning-around-client.onrender.com/" className="link">Clowning Around</a>
    <div className="project">
      <br />
      
      <p>
        Clowning Around is the clown-themed forum that you never knew you
        needed. This was my third project and is a group project that was built
        with the git forking workflow. It is a full-stack app that was created
        using the MERN stack. What started as a joke ended up being one of the
        most enjoyable projects I worked on. Our team added a sense of humor to
        our work which made it fun. We were a team of 4 and got a lot of
        practice working in a group environment and troubleshooting each other's
        code.
      </p>
      <img src={clowns} alt="clowns" height="500px" width="500px" className="screenshot"/>
      
      </div>

      <a href="httpas://recipe-forum-client.onrender.com/" className="link">Recipe Forum</a>
      <div className="project">
      <br />
      <p>
        My team and I created a recipe forum application for my final project.
        Food has always been a place for people to come together, so we decided
        to make an app that allows people to share recipes and add comments and
        feedback on each recipe. This app was built with react using HTML, CSS,
        JS, Python, and Django and is hosted on a postgresSQL database. In
        addition, we implemented user image input utilizing Cloudinary, a
        massive win for our team!
      </p>
      <img src={recipe} alt="recipe" height="500px" width="500px" className="screenshot"/>
      </div>

      <a href="https://gharmon327.github.io/blackjack-project/" className="link">BlackJack</a>
      <div className="project">
      <br />
      <p>
        This was the first project I built and was one of my two solo projects.
        For this project, I was able to code one of my favorite card games from
        growing up using HTML, vanilla JS, and CSS. This project was so much
        fun; with this being my first go at making a game, there was plenty of
        opportunity to solve problems and grow as a software engineer. In
        addition, doing this allowed me to dive in and solidify my passion for
        engineering.
      </p>
      <img src={blackjack} alt="blackjack" height="500px" width="500px" className="screenshot"/>
     </div>

      {/* <h2>Hackathon</h2> */}
       <a href="https://pet-front-end.onrender.com/" className="link">Fetch</a>
      <div className="project">
     
      <br />
      <p>text for fetch</p>
      <img src={fetch} alt="fetch" height="500px" width="500px" className="screenshot"/>
      </div>
    </div>
  );
}
