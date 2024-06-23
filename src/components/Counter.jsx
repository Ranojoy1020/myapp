import { render } from '@testing-library/react';
import React, {createElement,useState} from 'react';

export default function Counter() {

    const [count, setCount] = useState(0);

    let resetValue = () => {
        setCount(0);
    }

    let addValue = () => {
        if (count >= 10) {
            resetValue()
        }
        else{
            setCount(count + 1);
        }
    }

    let subValue = () => {
        if (count <= 0) {
            // const msg = createElement(
            //     'div',
            //     null,
            //     'You cannot go below 0'
            // )
            // render(msg)
            alert('You cannot go below 0')
        }
        else{
            setCount(count - 1);
        }
    }
    
    return(
        <div className="p-4 m-2 text-light">
            <h1>Counter</h1>
            <h3>Count: {count}</h3>
            <button className="btn btn-lg btn-outline-success px-6 my-2 mx-2" onClick={addValue}>+</button>
            <button className="btn btn-lg btn-outline-danger px-6 my-2 mx-2" onClick={subValue}>-</button>
            <button className="btn btn-lg btn-danger px-6 my-2 mx-2" onClick={resetValue}>Reset</button>
        </div>
    )
}