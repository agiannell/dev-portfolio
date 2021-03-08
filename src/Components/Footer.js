import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = props => {
    return (
        <section className="footer-container">
            <section className='footer-social-icons'>
                <a href='https://github.com/agiannell'><FaGithub size='1.5rem' /></a>
                <a href='https://www.linkedin.com/in/agiannell'><FaLinkedin size='1.5rem' /></a>
                <a href='https://twitter.com/anthonygiannell'><FaTwitter size='1.5rem' /></a>
                <a href='https://www.facebook.com/agiannell/'><FaFacebook size='1.5rem' /></a>
            </section>
        </section>
    )
}

export default Footer;