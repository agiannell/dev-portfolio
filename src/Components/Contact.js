import { MdEmail, MdPhoneIphone, MdLocationCity } from 'react-icons/md';

const Contact = props => {
    return (
        <section className="contact-container">
            <h3>Contact</h3>
            <section className='contact-items'>
                <section className='contact-item'>
                    <h5><MdEmail />Email</h5>
                    <a href='mailto:agiannell@gmail.com'>agiannell@gmail.com</a>
                </section>
                <section className='contact-item'>
                    <h5><MdPhoneIphone />Phone</h5>
                    <a href='tel:+17606381144'>760.638.1144</a>
                </section>
                <section className='contact-item'>
                    <h5><MdLocationCity />Location</h5>
                    <p>Boise, ID</p>
                </section>
            </section>
        </section>
    )
}

export default Contact;