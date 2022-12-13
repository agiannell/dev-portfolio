import { SkillProps } from './types'
import styles from '../styles/skill.module.scss'

export const Skill = (props: SkillProps) => {
  const { name, img } = props
  return (
    <section className={styles.skillContainer}>
      <img src={img} alt={name} />
      <h4>{name}</h4>
    </section>
  )
}
