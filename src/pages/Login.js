import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/LoginContext';
import logo from '../images/logo.svg';
import tomato from '../images/tomato.png';

export default function Login() {
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
    const valid = validateEmail && validatePassword;
    setBtnLogin(!valid);
  };

  const handleChange = ({ target: { value, name } }) => {
    setLogin({ ...login, [name]: value });
    validationLogin();
  };

  const handleClickLogin = () => {
    localStorage.setItem('user', JSON.stringify({ email: login.email }));
    localStorage.setItem('inProgressRecipes', JSON.stringify({ drinks: {}, meals: {} }));
    history.push('/meals');
  };

  const styleButton = () => {
    const defaultStyle = (
      'bg-yellow text-white w-full py-2 rounded-md font-bold uppercase'
    );
    const disabledStyle = `${defaultStyle} opacity-50 cursor-not-allowed`;
    return btnLogin ? disabledStyle : defaultStyle;
  };

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="bg-blue h-[422px] w-full">
        <img
          src={ logo }
          alt=""
          width="198"
          className="mx-auto relative top-24"
        />
        <img
          src={ tomato }
          alt=""
          className="relative top-16 drop-shadow-lg w-full"
        />
      </div>
      <div className="relative top-24 w-3/4">
        <h1 className="uppercase text-center text-blue text-xl italic">
          Login
        </h1>
        <form className="flex flex-col justify-between items-center space-y-2 pb-8">
          <input
            type="email"
            placeholder="Digite seu email"
            data-testid="email-input"
            name="email"
            value={ login.email }
            onChange={ handleChange }
            className="w-full border py-2 px-3 rounded-md placeholder:text-blue/50"
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            data-testid="password-input"
            name="password"
            value={ login.password }
            onChange={ handleChange }
            className="w-full border py-2 px-3 rounded-md placeholder:text-blue/50"
          />
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ btnLogin }
            onClick={ handleClickLogin }
            className={ styleButton() }
          >
            Enter
          </button>
        </form>
      </div>
    </main>
  );
}
