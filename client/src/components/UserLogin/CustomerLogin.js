import React, { Component } from 'react';
import styles from './Customer.module.css';
import { withRouter } from '../withRouter';

class CustomerLogin extends Component {
  state = {
    emailid: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  };

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  OnShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { emailid, password } = this.state;
    const { navigate } = this.props;

    let response = await fetch(`http://localhost:4000/user-login`, {
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
    const { emailid } = this.state;
    return (
      <>
        <label className={styles.inputLabel} htmlFor="emailid">
          Email ID
        </label>
        <input
          className={styles.userInput}
          type="text"
          id="emailid"
          value={emailid}
          name="emailid"
          onChange={this.onChangeHandler}
          placeholder="Enter your Email ID"
        />
      </>
    );
  };

  renderPasswordField = () => {
    const { password, showPassword } = this.state;
    const inputType = showPassword ? 'text' : 'password';
    return (
      <>
        <label className={styles.inputLabel} htmlFor="password">
          Password
        </label>
        <input
          className={styles.userInput}
          type={inputType}
          id="password"
          value={password}
          name="password"
          onChange={this.onChangeHandler}
          placeholder="Enter your Password"
        />
        <div className={styles.checkboxContainer}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="checkbox"
            onChange={this.OnShowPassword}
          />
          <label className={styles.showPassword} htmlFor="checkbox">
            Show Password
          </label>
        </div>
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg } = this.state;

    return (
      <div className={styles.appContainer}>
        <form className={styles.formContainer} onSubmit={this.submitForm}>
          <div className={styles.inputContainer}>{this.renderUsernameField()}</div>
          <div className={styles.inputContainer}>{this.renderPasswordField()}</div>
          <button className={styles.loginButton} type="submit">
            Login
          </button>
          {showSubmitError && <p className={styles.submitError}>*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(CustomerLogin);
