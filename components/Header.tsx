import React, { FC, ReactNode } from "react";

//Styles
import Styles from "../styles/Header.module.scss";

interface Ioption {
  text: string;
  href: string;
}

// Menu Option
const Option: FC<Ioption> = (props) => {
  return (
    <a
      href={props.href}
      className={`nav-link position-relative ms-5 ${Styles.option}`}
    >
      {props.text}

      <div className={`rounded position-absolute ${Styles.pointer}`}></div>
    </a>
  );
};

// Menu nav
const Menu: FC<{ children?: ReactNode }> = (props) => {
  return <nav className="nav">{props.children}</nav>;
};

// Header
const Header: FC = () => {
  return (
    <header
      className={`w-100 d-flex align-items-center justify-content-between pt-4 pb-4 px-4 position-absolute top-0 start-0 ${Styles.header}`}
    >
      <h3 className="mb-0">The Movie</h3>

      <Menu>
        <Option text="Home" href="/" />
        <Option text="Movies" href="/movies" />
        <Option text="Series" href="/series" />
      </Menu>
    </header>
  );
};

export default Header;
