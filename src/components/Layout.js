import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <h1>Soy el footer</h1>
    </React.Fragment>
  );
};

export default Layout;
