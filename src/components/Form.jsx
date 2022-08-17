import {forwardRef} from 'react'

const Form = forwardRef((props, ref) => {
  return (
    <form>
          <input ref = {ref} type="text" placeholder= {props.placeholder}/>
    </form>
  )
})

export default Form