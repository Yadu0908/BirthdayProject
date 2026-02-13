// src/Components/ReactCode/Login.jsx
import React, { useState } from 'react';
import { Lock, Key, Sparkles, ArrowRight, Heart, Star } from 'lucide-react';
import '../CssCode/Login.css';

const Login = ({ onLogin }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const pswd = "kinderjoy";
  console.log(pswd);


  const handleSubmit = (e) => {
    e.preventDefault();
    // CHANGE THIS PASSWORD TO WHATEVER YOU WANT
    if (passcode === pswd) {
      onLogin();
    } else {
      setError('Wrong password! Try again');
      setPasscode('');
    }
  };

  return (
    <div className="login-container">
      {/* Floating background elements for aesthetic vibe */}
      <div className="login-floating-elements">
        <div className="float-item i-1"><Heart size={40} color="#ff8fa3" /></div>
        <div className="float-item i-2"><Star size={30} color="#d79921" /></div>
        <div className="float-item i-3"><Sparkles size={35} color="#b16286" /></div>
      </div>

      <div className="login-card">
        <div className="icon-header">
          <div className="icon-circle">
            <Lock size={32} color="#fff" />
          </div>
        </div>

        <h1>Welcome!</h1>
        <p>Enter the secret code to unlock your surprise.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Key className="input-icon" size={20} />
            <input
              type="password"
              placeholder="Secret Code"
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                setError('');
              }}
            />
          </div>

          <button type="submit">
            <span>Unlock</span>
            <ArrowRight size={20} />
          </button>
        </form>

        {error && (
          <div className="error-message">
            <Sparkles size={16} /> {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;