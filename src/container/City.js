import { render } from '@testing-library/react';
import React from 'react'

export default function City() {
    constructor(props) {
        super(props);
        this.tate = {
            id = 10,
            stateName:'Rajasthan'
        }
    }
    
    changestateName = () => {
        this.setState ({
            this.stateName:'Gujarat'
        })
    }

 render () {
     return (
         <div>
             {this.state.state(Name)}
                 <button onClick={() => this.changestateName()}>changestateName</button>
         </div>
     )
 }
}


