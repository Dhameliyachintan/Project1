
import React, { useState } from 'react';

function App(props) {
    return (
        <div>
            <h1>HOC</h1>
            <Count />
            <HOC cmp={0} />
        </div>
    );
}

function HOC(props) {
    return <h2 style={{ backgroundcolor: 'red' }}>{props.cmp}</h2>
}

function Count() {
    const [count, setCount] = useState(0)

    return (<div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count =>  count + 1)}>add</button>
        <button onClick={() => setCount(count =>  count - 1)}>minus</button>
    </div>
    )
}

export default App;
