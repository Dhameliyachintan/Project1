import React, { useState } from 'react'
import CityFun from './CityFun';

export default function StateFun() {
    const [id,setId] = useState(101);
    const [name,setName] = useState('Amit');
  
    const change = () => {
        setId(102);
    }
  return (
    <>
    <div>
        {id}
        <button onClick={() => change()}>Change Id</button>
    </div>
    <div>
        {name}
        <button onClick={() => setName('Ankit')}>Change name</button>
        <CityFun name={name} />  
    </div>
   
    </> 
  )
}