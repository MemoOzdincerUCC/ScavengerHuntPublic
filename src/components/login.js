
import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
class Login extends React.Component {
      constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  login(event) {
    event.preventDefault();
    const { email, password } = this.state;
    if (email === '' && password === '') {
      this.setState({ error: 'Login Failed' });
    }
    }
    render() {
      const { email, password, error } = this.state;
      return (
        <div className="Login">
          <h1 className='login'>Login</h1>
          <form onSubmit={this.login}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="button">Login</button>
            {error && <p>{error}</p>}
          </form>
          <p className="label">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      );
    }
    }
export default Login;



