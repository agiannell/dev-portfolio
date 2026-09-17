import { Intro, Projects, Skills, Contact, Footer } from 'components'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Intro />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
