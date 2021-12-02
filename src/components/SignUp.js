import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        if (email.includes('@ucc.on.ca')) {
            fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error);
                    } else {
                        this.setState({
                            email: '',
                            password: ''
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            alert('Please Use Your UCC E-Mail');
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
          <div>
          <div className="App">
          <header className="Title text-center py-3">
            <p>
              <h3 className="text-info">Congratulations! you have passed the first stage of the Scavenger Hunt. <br/><br/><h4 className="text-primary">Please Sign Up Using Your UCC E-Mail to Access the Rest of the Riddles:</h4></h3>
            </p>
          </header>
        </div>
            <div className="signup">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>
                    <Link to="/login">Already have an account?</Link>
                </p>
            </div>
            </div>
        );
    }
}
export default SignUp;
