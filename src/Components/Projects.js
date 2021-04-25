import { FaGithub, FaEye } from 'react-icons/fa';
import unlockedPreview from '../assets/img/unlocked-preview.png'
import smashBrosPreview from '../assets/img/smash-bros-preview.png'
import deskjockeyPreview from '../assets/img/deskjockey-preview.png'

const Projects = props => {
    return (
        <section className='projects-container'>
            <h3>Projects</h3>
            <section className='project-items-container'>
                <section className='project-item'>
                    <img src={ unlockedPreview } alt='unlocked logo' />
                    <section className='project-btns'>
                        <a href='https://unlockedbudget.com/' target="_blank" rel="noreferrer" className='project-btn'><FaEye size='3rem' />Preview</a>
                        <a href='https://github.com/agiannell/unlocked-budget-app' target="_blank" rel="noreferrer" className='project-btn'><FaGithub size='3rem' />Github</a>
                    </section>
                </section>
                <section className='project-item'>
                    <img src={ smashBrosPreview } alt='smash bros logo' />
                    <section className='project-btns'>
                        <a href='https://smashbros.anthonygnl.com/' target="_blank" rel="noreferrer" className='project-btn'><FaEye size='3rem' />Preview</a>
                        <a href='https://github.com/agiannell/nodb-project' target="_blank" rel="noreferrer" className='project-btn'><FaGithub size='3rem' />Github</a>
                    </section>
                </section>
                <section className='project-item'>
                    <img src={ deskjockeyPreview } alt='deskjockey logo'/>
                    <section className='project-btns'>
                        <a href='https://deskjockey.us/' target="_blank" rel="noreferrer" className='project-btn'><FaEye size='3rem' />Preview</a>
                        <a href='https://github.com/WR8-Desktop-Dj/wr8-group-project-desktop-dj' target="_blank" rel="noreferrer" className='project-btn'><FaGithub size='3rem' />Github</a>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Projects;