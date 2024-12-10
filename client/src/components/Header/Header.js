import React from 'react';
import './Header.css'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo-container">
        <img src="https://s3-alpha-sig.figma.com/img/a7c2/c95a/e57df5f03ddceb5a4011eb1efd953170?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7lvM1s0i74MfggIel4C7VrexlGfffkxShALGiS99Txtnir6kf9cE0wDtpfwUiHXVw0BRZQHQIfzxZw1EQ0H1ClfCtFjay3rQCAIS~nSYjLOjg2TBlpcxwCRke5MQCppl-mEDFaqK3aVya7rCuiCkN2hntF9bpWkY8IHJUAJHnAT3XawIK1KXfQdPSW8NrdCJX0OPs0WWHm1JoUY~g374aVLigYQeWKFPHWCLbp7LdkPNRoL~08fbV~qj1viBUfox9ktE9IfCzq6zwxjitIwcAaYxJhH7o77FBChfuYVChd6aYDxaStNv9~tWtzOPwKUir3zVend3~SPe9Jc-FP5VA__" alt="Logo" className="logo" />
      </div>
      <div className="auth-buttons">
        <button 
        className="biz-login"
        onClick={(e)=>{
          e.preventDefault();
          navigate('/technician-login')
        }}
        >Biz Login</button>
        
        <button 
          className="login"
          onClick={(e)=>{
            e.preventDefault();
            navigate('/user-login')
          }}
          >
            Login
        </button>
      </div>
    </header>
  );
};

export default Header;
