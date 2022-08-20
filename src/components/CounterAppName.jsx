import {memo} from 'react'

const CounterAppName = ({appName, counter}) => {
    console.log(`I am CounterApp Component`);

  return (
    <p>The Value Of {appName} is {counter}</p>
  )
}

export default memo(CounterAppName)