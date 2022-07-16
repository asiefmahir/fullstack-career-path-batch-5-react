
function Skills(props) {
  return (
    <div class="skills">
                <h2>
                    Skills
                </h2>
                <ul>
                    {props.skills.map(skill => (
                        <li>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
  )
}

export default Skills