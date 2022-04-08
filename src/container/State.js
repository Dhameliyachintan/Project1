import React, { Component } from 'react';
import City from './City';


class State extends Component {
    constructor(props) {
                super(props);
                this.state = {
      
                    cityName:'Surat'
                }
                console.log(this.props.name,this.props.id);
            }
            changestateName = () => {
                        this.setState ({
                          cityName:'American'
                        })
                    }
  render() {
    return (
                 <div>
                     {this.state.cityName}
                         <button onClick={() => this.changestateName()}>changestateName</button>
                         <City name={this.state.cityName}/>
                 </div>
             )
  }
}


export default State;
