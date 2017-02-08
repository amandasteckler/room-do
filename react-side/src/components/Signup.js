import React, { Component } from 'react';


class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {name: "", email: "", password: ""}
  }

  render() {
    return (
      <div>
        <form>
          <label>Email: </label>
          <input />
          <label>Password: </label>
          <input />
        </form>
      </div>
    )
  }

}

export default Signup;
