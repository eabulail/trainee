import React, { Component } from "react";
import  FetchLogin from '../action'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      res: [],
    };
  }
  componentDidMount() {
    FetchLogin().then((responce) => {
      this.setState({ res: responce });
    });

    let i = 0;

    for (i; i < this.state.res.length; i++) {
      if (
        this.state.res[i].email === this.state.email &&
        this.state.res[i].password === this.state.password
      ) {
        this.props.history.push("/App");

        let user_id = this.state.res[i]._id;

        this.fetchData1 = async () => {
          const responce1 = await fetch(
            "https://traineer-064a.restdb.io/rest/accounts/" + user_id,
            {
              async: true,
              crossDomain: true,
              method: "PUT",
              headers: {
                "content-type": "application/json",
                "x-apikey": "5f81fab25799e648a5a8eec6",
                "cache-control": "no-cache",
              },
            }
          ).then((responce1) => responce1.json());

          responce1.logged = "true";

          console.log(responce1);
        };
      } //end of if statment
    }

    //console.log(responce);
    // end of for loop
  }
  handleInputChange(event) {
    this.setState({ email: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handlepassword(event) {
    this.setState({ password: event.target.value });
  }
  canBeSubmitted() {
    let valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      valid.test(this.state.email)
    );
  }
  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div class="logcontainer">
        <p>The Login Page</p>
        <input
          className="inputs"
          name="email"
          placeholder="Email"
          id="email"
          type="text"
          value={this.state.email}
          onChange={this.handleEmail.bind(this)}
        />
        <input
          className="inputs"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handlepassword.bind(this)}
        />
        <button
          id="login"
          disabled={!isEnabled}
          onClick={() => this.componentDidMount()}
        >
          LOG_IN
        </button>
      </div>
    );
  }
}
