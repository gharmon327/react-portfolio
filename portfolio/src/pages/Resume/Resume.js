import resume from '../../images/resume.png'

export default function Resume(){
    return(
    <div>
        <h1>Resume</h1>
        <p><a href="documents/Gregory J Harmon Resume 2023.pages" download>Click Here to Download my Resume</a></p>
        <img src={resume} alt='resume'/>
    </div>)
}