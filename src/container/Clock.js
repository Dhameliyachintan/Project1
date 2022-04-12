import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {  // provide initialvalue
        super(props);
        this.state = {
            time:new Date()
        }
        console.log("1 constructor");
    }

    tick = () => {  
        console.log("tick");
        this.setState( {
            time:new Date()
        })
    }
   componentDidMount = () => {  //request data to server
       console.log("3 componentDidMount");
       this.timerId = setInterval (() => this.tick(),1000)
   }

   componentDidUpdate = () => {  // call update in component 
       console.log("4 componentDidUpdate");
    }

   componentWillUnmount =() => {  // call at last after we move to another component
       console.log('componentWillUnmount');
       clearInterval(this.timerId)
   }

  render() { // call each time when state update 
      console.log("2 render");
    return (
      <div><center><h1>{this.state.time.toLocaleTimeString()}</h1></center></div>
    )
  }
}
