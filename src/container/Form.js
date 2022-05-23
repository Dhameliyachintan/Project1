import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: "vinodthapa",
            email: "Enter Your email Id",
            phone: "9876543211",
            message: "Plz subscribe to my channel"
        }
    }

    handlename = (event) => {
        this.setState({ fullname: event.target.value })
    }
    handleemail = (event) => {
        this.setState({ email: event.target.value })
    }
    handlephone = (event) => {
        this.setState({ phone: event.target.value })
    }
    handlemessage = (event) => {
        this.setState({ message: event.target.value })
    }
    // handlesubmit = (event) => {
    //     alert('my name is ${this.state.fullname}.
    //     my name is ${this.state.fullname}')
    //     event.preventDefault();
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label> fullname </label>
                    <input type="text" value={this.state.fullname}
                        onChange={this.handlename} /> <br />
                    <label> Email </label><br />
                    <input type="email" value={this.state.email}
                        onChange={this.handleemail} /> <br />
                    <label> Mobile </label><br />
                    <input type="number" value={this.state.phone}
                        onChange={this.handlephone} /> <br />
                    <label> Message </label>
                    <textarea value={this.state.message}
                        onChange={this.handlemessage} /> <br />
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default Form;


