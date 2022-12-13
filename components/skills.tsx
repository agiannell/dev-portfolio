import { Skill } from 'components'
import { SkillProps } from './types'
import styles from '../styles/skills.module.scss'

export const Skills = () => {
  const skills: SkillProps[] = [
    { name: 'React', img: '/images/skill-icons/react.svg' },
    { name: 'Next.JS', img: '/images/skill-icons/next-js.svg' },
    { name: 'Node', img: '/images/skill-icons/node.svg' },
    { name: 'PostgreSQL', img: '/images/skill-icons/postgresql.svg' },
    { name: 'Javascript', img: '/images/skill-icons/javascript.svg' },
    { name: 'Typescript', img: '/images/skill-icons/ts.svg' },
    { name: 'C#', img: '/images/skill-icons/csharp.svg' },
    { name: 'Redux', img: '/images/skill-icons/redux.svg' },
    { name: 'HTML', img: '/images/skill-icons/html.svg' },
    { name: 'CSS', img: '/images/skill-icons/css.svg' },
    { name: 'Sass', img: '/images/skill-icons/sass.svg' },
    { name: 'Git', img: '/images/skill-icons/git.svg' },
    { name: 'Github', img: '/images/skill-icons/github.svg' },
    { name: 'VS Code', img: '/images/skill-icons/visual-studio.svg' },
    { name: 'Postman', img: '/images/skill-icons/postman.svg' },
    { name: 'Photoshop', img: '/images/skill-icons/photoshop.svg' },
    { name: 'Illustrator', img: '/images/skill-icons/illustrator.svg' }
  ]

  return (
    <section className={styles.skillsContainer}>
      <h3>Skills</h3>
      <section className={styles.skillsMap}>
        {skills.map((e, i) => (
          <Skill key={i} name={e.name} img={e.img} />
        ))}
      </section>
    </section>
  )
}
