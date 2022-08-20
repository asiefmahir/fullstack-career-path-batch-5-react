import {memo} from 'react'

const Title = () => {
    console.log(`I am Title Component`);
  return (
    <h3>Our Counter App</h3>
  )
}

export default memo(Title)