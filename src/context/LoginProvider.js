import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RecipesContext from './RecipesContext';

function LoginProvider({ children }) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [btnLogin, setBtnLogin] = useState(true);

  const history = useHistory();

  const context = useMemo(() => ({
    login,
    setLogin,
    btnLogin,
    setBtnLogin,
    history,
  }), [login, setLogin, btnLogin, setBtnLogin, history]);

  return (
    <RecipesContext.Provider value={ context }>
      {children}
    </RecipesContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
