import { FaGithub, FaEye } from 'react-icons/fa';
import unlockedPreview from '../assets/img/unlocked-preview.png'
import deskjockeyPreview from '../assets/img/deskjockey-preview.png'

const Projects = props => {
    return (
        <section className='projects-container'>
            <section className='projects-highlight'>
                <h2>projects</h2>
            </section>
            <section className='project-item'>
                <img src={ unlockedPreview } alt='unlocked logo' />
                <section className='project-btns'>
                    <a href='https://unlockedbudget.com/' className='project-btn'><FaEye size='3rem' />Preview</a>
                    <a href='https://github.com/agiannell/unlocked-budget-app' className='project-btn'><FaGithub size='3rem' />Github</a>
                </section>
            </section>
            <section className='project-item'>
                <img src={ deskjockeyPreview } alt='deskjockey logo'/>
                <section className='project-btns'>
                    <a href='https://deskjockey.us/' className='project-btn'><FaEye size='3rem' />Preview</a>
                    <a href='https://github.com/WR8-Desktop-Dj/wr8-group-project-desktop-dj' className='project-btn'><FaGithub size='3rem' />Github</a>
                </section>
            </section>
        </section>
    )
}

export default Projects;