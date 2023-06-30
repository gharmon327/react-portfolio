import skills from "../../images/skills.svg";
import profile from "../../images/HARMGRE.jpg";
import github from "../../images/github-mark.png";
import linkedin from "../../images/linkedin.png";
import "./about.css";

export default function About() {
  return (
    <>
      {/* <h1> Gregory Harmons Portfolio </h1> */}
      <div className="header">
        <div className="headshot">
        <img className="headshotImg" src={profile} alt="headshot" />
        </div>
        <div className="who">
          <h2>Who Am I?</h2>
          <p className="brand">
            I am a Software Engineer with a strong interest in Full Stack
            Development. My professional goal is to work in the industry of
            software development, where I can help solve problems to help our
            society move forward with tech advancements. I am a hard-working,
            organized, sociable, and determined person who enjoys working both
            individually and in a team environment. With my 6 years of
            experience in the logistics industry I know first hand what it takes
            to be successful in a fast paced environment solving complex issues
            and working cross functionally. I will apply these skills when
            programming a new web application that aims to provide a better user
            experience!
          </p>
       
        <div className="passion">
          <h2>Passions</h2>
          <ul>
            <li>🥾 Hiking 🥾</li>
            <li>🚴 Biking 🚴</li>
            <li>🏄 Paddle-boarding 🏄</li>
            <li>🏕️ Camping 🏕️</li>
            <li>👨‍💻 Coding 👨‍💻</li>
            <li>🎣 Fishing 🎣</li>
          </ul>
        </div>
      </div>
      <div className="skills">
      <h2>Skills</h2>
      <img src={skills} alt="skills" />
        </div>
      <div className="contact">
        <h2>Contact Me</h2>
        <ul>
          <li>
            📧 <b>Email:</b> GHarmon327@gmail.com 📧
          </li>
          <li>
            🌎 <b>Location:</b> South Carolina(Open to Relocation) 🌎
          </li>
        </ul>
        <a href="https://github.com/gharmon327">
          <img src={github} alt="github" height="50px" width="50px" />
        </a>
        <a href="https://www.linkedin.com/in/gregjharmon/">
          <img src={linkedin} alt="linkedIN" height="50px" width="50px" />
        </a>
      </div>
    </div>
    </>
  );
}
