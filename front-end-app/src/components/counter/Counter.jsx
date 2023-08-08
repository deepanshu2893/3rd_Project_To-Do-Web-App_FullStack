
import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'





export default function Counter() {

    const [count, setCount] = useState(0)

    function incrementCounterParentFunction(by) {
        setCount(count + by)

    }
    function decrementCounterParentFunction(by) {
        setCount(count - by)

    }
    function resetFunction(){
        setCount(0)
    }



    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1}
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}></CounterButton>

            <CounterButton by={2}
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}></CounterButton>

            <CounterButton by={5}
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}></CounterButton>
            <button className="resetButton"
                    onClick={resetFunction}
                >Reset</button>
        </>
    )
}


