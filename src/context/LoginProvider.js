import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [btnLogin, setBtnLogin] = useState(true);

  const context = useMemo(() => ({
    login,
    setLogin,
    btnLogin,
    setBtnLogin,
  }), [login, setLogin, btnLogin, setBtnLogin]);

  return (
    <LoginContext.Provider value={ context }>
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
