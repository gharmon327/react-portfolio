import resume from '../../images/resume.png'
import "./resume.css"

export default function Resume(){
    return(
    <div>
        <p><a href="documents/Gregory J Harmon Resume 2023.pages" download>Click Here to Download my Resume</a></p>
        <img src={resume} alt='resume' className='resumeImg'/>
    </div>)
}