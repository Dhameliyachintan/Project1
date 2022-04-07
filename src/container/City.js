import React, { Component } from 'react';
import Country from './Country';

class City extends Component {
    constructor(props) {
                super(props);
                this.state = {
                    id: 101,
                    cityName:'Rajasthan'
                }
                // console.log(this.props.name);
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
                         <Country name={this.state.cityName} id='101' />
                 </div>
             )
  }
}


export default City;




