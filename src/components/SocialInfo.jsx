function SocialInfo(props) {
  return (
    <div class="social-media">
                <h2>
                    Social Media
                </h2>
                <p>linkedIn: {props.linkedIn}</p>
                <p>FB: {props.fb}</p>
                <p>twitter: {props.twitter}</p>

            </div>
  )
}

export default SocialInfo