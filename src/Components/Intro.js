import stackedLogo from '../assets/img/logo-stacked.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Intro = props => {
    return (
        <section className='intro-container'>
            <img src={ stackedLogo } alt='logo' />
            {/* <section className='intro-cursor'></section> */}
            <MdKeyboardArrowDown className='section-scroll-down' />
        </section>
    )
}

export default Intro;