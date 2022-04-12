import React, {useEffect , useState} from 'react';

function Clockfun(props) {
    const [time, setTime] = useState(new Date());  //constructor

    const tick = () => {
        console.log('tick');
        setTime(new Date());
    }

    useEffect(
        () => {
           //componentDidMount //componentDidUpdate
           const timerID = setInterval( () => tick(), 1000);
           console.log('componentDidMount');
           return() => {
               //componentWillUnmount
               clearInterval(timerID);
            //    console.log('timerID');
           }
        },
    [time]);
  return (
    <div><center><h1>{time.toLocaleTimeString()}</h1></center></div> 
  );
}

export default Clockfun;