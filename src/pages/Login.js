import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

function Login() {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const { btnLogin, setBtnLogin } = useContext(LoginContext);

  const validationLogin = () => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const validateEmail = regexEmail.test(login.email);
    const numberSmallest = 6;
    const validatePassword = login.password.length >= numberSmallest;
    const valid = (validateEmail && validatePassword);
    setBtnLogin(!valid);
  };

  const handleChange = ({ target: { value, name } }) => {
    setLogin({ ...login, [name]: value });
    validationLogin();
  };

  const handleClickLogin = () => {
    console.log(login.email);
    localStorage.setItem('user', JSON.stringify({ email: login.email }));
    history.push('/meals');
  };

  return (
    <main>
      <input
        type="email"
        placeholder="Digite seu email"
        data-testid="email-input"
        name="email"
        value={ login.email }
        onChange={ handleChange }
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        data-testid="password-input"
        name="password"
        value={ login.password }
        onChange={ handleChange }
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ btnLogin }
        onClick={ handleClickLogin }
      >
        Enter
      </button>
    </main>
  );
}

export default Login;
