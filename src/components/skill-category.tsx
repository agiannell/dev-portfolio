import type { SkillCategoryProps } from './types'
import styles from '../styles/skill-category.module.scss'

export const SkillCategory = (props: SkillCategoryProps) => {
  const { title, icon: Icon, skills } = props
  return (
    <section className={styles.categoryContainer}>
      <div className={styles.categoryHeader}>
        <Icon className={styles.icon} />
        <h4>{title}</h4>
      </div>
      <div className={styles.badgeRow}>
        {skills.map((skill, i) => (
          <span key={i} className={styles.badge}>{skill}</span>
        ))}
      </div>
    </section>
  )
}
