import { MdEmail, MdPhoneIphone, MdLocationCity } from 'react-icons/md'
import styles from '../styles/contact.module.scss'

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h3>Contact</h3>
      <div className={styles.contactItems}>
        <div className={styles.contactItem}>
          <div className={styles.contactItemTitle}>
            <MdEmail size='1.5rem' />
            <h5 style={{ margin: '.5rem 0' }}>Email</h5>
          </div>
          <a href='mailto:agiannell@gmail.com'>agiannell@gmail.com</a>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactItemTitle}>
            <MdPhoneIphone size='1.5rem' />
            <h5 style={{ margin: '.5rem 0' }}>Phone</h5>
          </div>
          <a href='tel:+17606381144'>760.638.1144</a>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactItemTitle}>
            <MdLocationCity size='1.5rem' />
            <h5 style={{ margin: '.5rem 0' }}>Location</h5>
          </div>
          <p style={{ margin: 0 }}>Boise, ID</p>
        </div>
      </div>
    </div>
  )
}
