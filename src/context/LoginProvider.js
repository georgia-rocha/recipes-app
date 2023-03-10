import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

export default function LoginProvider({ children }) {
  const [btnLogin, setBtnLogin] = useState(true);

  const context = useMemo(
    () => ({
      btnLogin,
      setBtnLogin,
    }),
    [btnLogin, setBtnLogin],
  );

  return (
    <LoginContext.Provider value={ context }>{children}</LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
