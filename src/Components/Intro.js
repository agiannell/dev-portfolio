import stackedLogo from '../assets/img/logo-stacked.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

const Intro = props => {
    return (
        <section className='intro-container'>
            <img src={ stackedLogo } alt='logo' />
            <section className='social-icons'>
                <a href='https://github.com/agiannell'><FaGithub size='1.5rem' /></a>
                <a href='https://www.linkedin.com/in/agiannell'><FaLinkedin size='1.5rem' /></a>
                <a href='https://twitter.com/anthonygiannell'><FaTwitter size='1.5rem' /></a>
                <a href='https://www.facebook.com/agiannell/'><FaFacebook size='1.5rem' /></a>
            </section>
            <MdKeyboardArrowDown className='section-scroll-down' />
        </section>
    )
}

export default Intro;