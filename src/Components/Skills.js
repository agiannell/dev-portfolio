import Skill from './Skill';
import react from '../assets/img/skill-icons/react.svg';
import redux from '../assets/img/skill-icons/redux.svg';
import node from '../assets/img/skill-icons/node.svg';
import javascript from '../assets/img/skill-icons/javascript.svg';
import css from '../assets/img/skill-icons/css.svg';
import git from '../assets/img/skill-icons/git.svg';
import github from '../assets/img/skill-icons/github.svg';
import html from '../assets/img/skill-icons/html.svg';
import illustrator from '../assets/img/skill-icons/illustrator.svg';
import photoshop from '../assets/img/skill-icons/photoshop.svg';
import postgresql from '../assets/img/skill-icons/postgresql.svg';
import postman from '../assets/img/skill-icons/postman.svg';
import sass from '../assets/img/skill-icons/sass.svg';
import visualStudio from '../assets/img/skill-icons/visual-studio.svg';

const Skills = props => {
    const skills = [
        { name: 'React', img: react  },
        { name: 'Node', img: node  },
        { name: 'Javascript', img: javascript  },
        { name: 'Redux', img: redux  },
        { name: 'HTML', img: html  },
        { name: 'CSS', img: css  },
        { name: 'Sass', img: sass  },
        { name: 'Git', img: git  },
        { name: 'Github', img: github  },
        { name: 'PostgreSQL', img: postgresql  },
        { name: 'VS Code', img: visualStudio  },
        { name: 'Postman', img: postman  },
        { name: 'Photoshop', img: photoshop  },
        { name: 'Illustrator', img: illustrator  }
    ]

    return (
        <section className="skills-container">
            <h3>Skills</h3>
            <section className='skills-map'>
                { skills.map((e, i) => (
                    <Skill
                    key={ i }
                    name={ e.name }
                    img={ e.img } />
                    )) }
            </section>
        </section>
    )
}

export default Skills;