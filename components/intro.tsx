import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import styles from '../styles/intro.module.scss'

export const Intro = () => {
  return (
    <section className={styles.introContainer}>
      <img src='/images/logo-stacked.svg' alt='logo' />
      <section className={`${styles.socialIcons} ${styles.mobile}`}>
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
      <section className={`${styles.socialIcons} ${styles.tablet}`}>
        <a href='https://github.com/agiannell'>
          <FaGithub size='2rem' />
        </a>
        <a href='https://www.linkedin.com/in/agiannell'>
          <FaLinkedin size='2rem' />
        </a>
        <a href='https://twitter.com/anthonygiannell'>
          <FaTwitter size='2rem' />
        </a>
        <a href='https://www.facebook.com/agiannell/'>
          <FaFacebook size='2rem' />
        </a>
      </section>
      <section className={`${styles.socialIcons} ${styles.desktop}`}>
        <a href='https://github.com/agiannell'>
          <FaGithub size='2.5rem' />
        </a>
        <a href='https://www.linkedin.com/in/agiannell'>
          <FaLinkedin size='2.5rem' />
        </a>
        <a href='https://twitter.com/anthonygiannell'>
          <FaTwitter size='2.5rem' />
        </a>
        <a href='https://www.facebook.com/agiannell/'>
          <FaFacebook size='2.5rem' />
        </a>
      </section>
      <MdKeyboardArrowDown className={styles.sectionScrollDown} />
    </section>
  )
}
