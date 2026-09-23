import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import type { CaseStudyProps } from './types'
import styles from '../styles/case-study.module.scss'

export const CaseStudy = (props: CaseStudyProps) => {
  const { title, role, timeline, stack, sections } = props
  return (
    <div className={styles.pageContainer}>
      <article className={styles.caseStudyContainer}>
        <Link href='/' className={styles.backLink}>
          <FaArrowLeft />
          Back to home
        </Link>
        <header className={styles.caseStudyHeader}>
          <h1>{title}</h1>
          <dl className={styles.metaList}>
            <div>
              <dt>Role</dt>
              <dd>{role}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{timeline}</dd>
            </div>
          </dl>
          <div className={styles.stackRow}>
            {stack.map((tech) => (
              <span key={tech} className={styles.stackBadge}>{tech}</span>
            ))}
          </div>
        </header>
        {sections.map((section) => (
          <section key={section.heading} className={styles.caseStudySection}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>
        ))}
        <Link href='/' className={styles.backLink}>
          <FaArrowLeft />
          Back to home
        </Link>
      </article>
    </div>
  )
}
