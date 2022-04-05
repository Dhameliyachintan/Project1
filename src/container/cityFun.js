import React, { useState } from 'react'

export default function CityFun() {
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
    </> 
  )
}