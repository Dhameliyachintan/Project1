import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
                super(props);
                this.state = {
                    id: 101,
                    cityName:'Rajasthan'
                }
            }
            changestateName = () => {
                        this.setState ({
                          cityName:'Gujarat'
                        })
                    }
  render() {
    return (
                 <div>
                     {this.state.cityName}
                         <button onClick={() => this.changestateName()}>changestateName</button>
                 </div>
             )
  }
}


export default City;




