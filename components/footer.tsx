import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import styles from '../styles/footer.module.scss'

export const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <section className={styles.footerSocialIcons}>
        <a href='https://github.com/agiannell'>
          <FaGithub size='1.5rem' />
        </a>
        <a href='https://www.linkedin.com/in/agiannell'>
          <FaLinkedin size='1.5rem' />
        </a>
        <a href='https://twitter.com/anthonygiannell'>
          <FaTwitter size='1.5rem' />
        </a>
        <a href='https://www.facebook.com/agiannell/'>
          <FaFacebook size='1.5rem' />
        </a>
      </section>
    </section>
  )
}
