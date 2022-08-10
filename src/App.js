import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import City from './container/City';
import State from './container/State';
import Employe from './container/Employe';
import Medicine from './container/Medicine';
import Object1 from './container/Object1';
import Array1 from './container/Array1';
import Counter from './container/Counter';
import CityFun from './container/CityFun';
import StateFun from './container/StateFun';
import Clock from './container/Clock';
import Clocktime from './container/Clocktime';
import Clockfun from './container/Clockfun';
import Loading from './componate/Loading/Loading';
import Home from './container/Home/Home';
import Form from './container/Form';
import Login from './container/Login';
import Logins from './container/Logins';
import Loginss from './container/Loginss';
// import ReactForm from './container/ReactForm';
const HomeWithLoading = Loading(Home)

function App(props) {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);

    const userData = [
      {
        id: 101, 
        name:'amit'
      },
      {
       id:102,
       name:'ajay'
      }
    ]

    useEffect (
      () => {
         setLoading(true)
         setTimeout(() => {setLoading(false); setData(userData)},2000)

      },
    [])
 
// function App() {
  return (
    <div>

      <HomeWithLoading
      isLoading = {loading}
      data={data}
      />
      {/* <Employe/> */}
     {/* <Array1 /> */}
     {/* <Medicine/> */}
     {/* <Object1 /> */}
      {/* <CityFun /> */}
      {/* <StateFun /> */}
      {/* <Counter/> */}
      {/* <Country /> */}
      {/* <City/>
     <State />
     <CityFun/>
     <StateFun/> */}
     <Clock/>
     {/* <Clocktime/> */}
     <Clockfun/>
     {/* <Login/> */}
     {/* <Loginss/> */}
     {/* <Form/> */}
     {/* <Logins/> */}
     {/* <Array1/> */}
    </div>
  );
};


export default App;

