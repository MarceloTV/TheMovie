import React, { FC } from "react";

import Styles from "../styles/Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer
      className={`p-5 d-flex justify-content-between align-items-center ${Styles.footer}`}
    >
      <h3 className="mb-0">The Movie</h3>
      <p className="mb-0 text-secondary">
        &copy; 2022 The Movie Inc. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
