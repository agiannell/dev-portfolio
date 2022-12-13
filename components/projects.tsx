import { FaGithub, FaEye } from 'react-icons/fa'
import styles from '../styles/projects.module.scss'

export const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      <h3>Projects</h3>
      <section className={styles.projectItemsContainer}>
        <section className={styles.projectItem}>
          <img src='/images/unlocked-preview.png' alt='unlocked logo' />
          <section className={styles.projectBtns}>
            <a
              href='https://unlocked.anthonygnl.com/'
              target='_blank'
              rel='noreferrer'
              className={styles.projectBtn}
            >
              <FaEye size='3rem' />
              Preview
            </a>
            <a
              href='https://github.com/agiannell/unlocked-budget-app'
              target='_blank'
              rel='noreferrer'
              className={styles.projectBtn}
            >
              <FaGithub size='3rem' />
              Github
            </a>
          </section>
        </section>
        <section className={styles.projectItem}>
          <img src='/images/smash-bros-preview.png' alt='smash bros logo' />
          <section className={styles.projectBtns}>
            <a
              href='https://smashbros.anthonygnl.com/'
              target='_blank'
              rel='noreferrer'
              className={styles.projectBtn}
            >
              <FaEye size='3rem' />
              Preview
            </a>
            <a
              href='https://github.com/agiannell/nodb-project'
              target='_blank'
              rel='noreferrer'
              className={styles.projectBtn}
            >
              <FaGithub size='3rem' />
              Github
            </a>
          </section>
        </section>
        <section className={styles.projectItem}>
          <img src='/images/deskjockey-preview.png' alt='deskjockey logo' />
          <section className={styles.projectBtns}>
            <a
              href='https://deskjockey.anthonygnl.com/'
              target='_blank'
              rel='noreferrer'
              className={styles.projectBtn}
            >
              <FaEye size='3rem' />
              Preview
            </a>
            <a
              href='https://github.com/WR8-Desktop-Dj/wr8-group-project-desktop-dj'
              target='_blank'
              rel='noreferrer'
              className={styles.projectBtn}
            >
              <FaGithub size='3rem' />
              Github
            </a>
          </section>
        </section>
      </section>
    </section>
  )
}
