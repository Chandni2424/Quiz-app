import React from "react";
import { connect } from "react-redux";
import validator from "validator";
import AdminHeader from "../AdminHeader.js";
import { userLogIn } from "../../redux/actions/userAction";

class UserLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  cb = () => {
    console.log("loggedin");
    this.props.history.push("/allquizzes");
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      return alert("Email and Password are a must!");
    }

    if (!validator.isEmail(email)) {
      return alert("Email is invalid");
    }

    if (password.length < 6) {
      return alert("Password must consist of atleast 6 characters");
    }

    const userData = { email, password };

    this.props.userLogIn(userData, this.cb);
  };

  render() {
    console.log(this.props, "inside userlogin component");
    return (
      <>
        <AdminHeader />

        <div className="field wrapper">
          <h1 className="login-header">User Login</h1>
          <center>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <button onClick={this.handleSubmit} className="button is-black">
                Login
              </button>
            </div>
          </center>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { userLogIn })(UserLogin);
