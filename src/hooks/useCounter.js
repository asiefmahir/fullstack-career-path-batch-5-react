import { useState } from "react";

export const useCounter = (initState) => {
    const [counter, setCounter] = useState(initState);

    const increaseHandler = (payload) => {
        setCounter(counter + payload)
    }

    const decreaseHandler = (payload) => {
        setCounter(counter - payload)
    }

    return {
        counter,
        increaseHandler, 
        decreaseHandler
    }
}