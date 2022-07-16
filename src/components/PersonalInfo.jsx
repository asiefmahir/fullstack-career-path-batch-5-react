const PersonalInfo = (props) => {
    return (
        <div class="personal-info">
            <h2>
                Personal Info
            </h2>
            <h2>
                Name: {props.name}
            </h2>
            {props.mobile && (
                <p>
                    mobile : {props.mobile}
                </p>
            )}
            <p>
                email: {props.email}
            </p>
        </div>
    )
}

export default PersonalInfo