import React, { FC, Fragment, ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Layout;
