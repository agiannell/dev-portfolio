import { SkillCategory } from 'components'
import { skillCategories } from './skills-data'
import styles from '../styles/skills.module.scss'

export const Skills = () => {
  return (
    <section className={styles.skillsContainer}>
      <h3>Skills</h3>
      <section className={styles.categoriesGrid}>
        {skillCategories.map((c, i) => (
          <SkillCategory key={i} title={c.title} icon={c.icon} skills={c.skills} />
        ))}
      </section>
    </section>
  )
}
