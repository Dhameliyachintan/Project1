import React, { useState } from 'react'
import CityFun from './CityFun';

export default function StateFun() {
    const [id,setId] = useState(101);
    const [name,setName] = useState('');
  
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
        <button onClick={() => setName('Amit')}>Change name</button>
        
    </div>
    <CityFun place ="ankit"/>
    </> 
  )
}