const Skill = props => {
    const { name, img } = props
    return (
        <section className="skill-container">
            <img src={ img } alt={ name } />
            <h4>{ name }</h4>
        </section>
    )
}

export default Skill;