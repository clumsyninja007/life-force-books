import React, { Component } from 'react';
import './signupWidget.css';

import envPlain from '../../images/EnvSignUp-Plain.jpg';

let formStyle = {
  backgroundImage: `url(${envPlain})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

class SignupWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      submitted: false
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })
  }  

  submitHandler(event) {
    event.preventDefault()
    this.setState({submitted: true});
  }

  render() {
    if (this.state.submitted === true) {
      return (
        <p>Thank you for submitting!</p>
      )
    }
    else {
      return (
        <form
          className="signupWidget"
          style={formStyle}
          onSubmit={this.submitHandler}
          method="post"
        >
          <h3>​TO RECEIVE EXCLUSIVE CONTENT​</h3>
          <input 
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleInput}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleInput}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
            placeholder="Email"
            required
          />
          <button type="submit">Subscribe To Our Newsletter!</button>
        </form>
      );
    }
  }
}

export default SignupWidget;