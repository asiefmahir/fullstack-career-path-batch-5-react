import {memo} from 'react'

const Button = ({submitHandler, label}) => {
    console.log(`I am Button Component`);

  return (
    <button onClick = {submitHandler}>{label}</button>
  )
}

export default memo(Button)