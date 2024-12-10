import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import styles from './TechnicianLogin.module.css'; // Import the CSS module
import { withRouter } from '../withRouter';

class TechnicianLogin extends Component {
  state = {
    emailid: '',
    password: '',
    businessName: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  };

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  onShowPasswordToggle = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}));
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { emailid, password } = this.state;
    const { navigate } = this.props;

    let response = await fetch(`http://localhost:4000/technician-login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailId: emailid, password }),
    });

    if (response.ok) {
      let data = await response.json();
      alert(data.message);
      if (data.success) {
        navigate('/'); // Use navigate for navigation
      }
    }
  };


  

  renderUsernameField = () => {
    const {emailid} = this.state;
    return (
      <div className={styles.inputContainer}>
        <label htmlFor="emailid" className={styles.inputLabel}>Email ID</label>
        <input
          type="email"
          id="emailid"
          value={emailid}
          name="emailid"
          onChange={this.onChangeHandler}
          placeholder="Enter your email ID"
          className={styles.userInput}
        />
      </div>
    );
  };

  renderBusinessField = () => {
    const {businessName} = this.state;
    return (
      <div className={styles.inputContainer}>
        <label htmlFor="businessName" className={styles.inputLabel}>Business Name</label>
        <input
          type="text"
          id="businessName"
          value={businessName}
          name="businessName"
          onChange={this.onChangeHandler}
          placeholder="Enter your business name"
          className={styles.userInput}
        />
      </div>
    );
  };

  renderPasswordField = () => {
    const {password, showPassword} = this.state;
    const inputType = showPassword ? 'text' : 'password';
    return (
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.inputLabel}>Password</label>
        <input
          type={inputType}
          id="password"
          value={password}
          name="password"
          onChange={this.onChangeHandler}
          placeholder="Enter your password"
          className={styles.userInput}
        />
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="showPassword"
            onChange={this.onShowPasswordToggle}
            className={styles.checkbox}
          />
          <label htmlFor="showPassword" className={styles.showPassword}>Show Password</label>
        </div>
      </div>
    );
  };

  render() {
    const {showSubmitError, errorMsg} = this.state;
    

    return (
      <div className={styles.appContainer}>
        <form onSubmit={this.submitForm} className={styles.formContainer}>
          <img
            src="https://s3-alpha-sig.figma.com/img/a7c2/c95a/e57df5f03ddceb5a4011eb1efd953170?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7lvM1s0i74MfggIel4C7VrexlGfffkxShALGiS99Txtnir6kf9cE0wDtpfwUiHXVw0BRZQHQIfzxZw1EQ0H1ClfCtFjay3rQCAIS~nSYjLOjg2TBlpcxwCRke5MQCppl-mEDFaqK3aVya7rCuiCkN2hntF9bpWkY8IHJUAJHnAT3XawIK1KXfQdPSW8NrdCJX0OPs0WWHm1JoUY~g374aVLigYQeWKFPHWCLbp7LdkPNRoL~08fbV~qj1viBUfox9ktE9IfCzq6zwxjitIwcAaYxJhH7o77FBChfuYVChd6aYDxaStNv9~tWtzOPwKUir3zVend3~SPe9Jc-FP5VA__"
            alt="website logo"
            className={styles.loginLogo}
          />
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          {this.renderBusinessField()}
          <button type="submit" className={styles.loginButton}>Login</button>
          {showSubmitError && <p className={styles.submitError}>*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(TechnicianLogin);
