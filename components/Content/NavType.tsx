import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faMagnifyingGlass,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import React, { FC, Fragment } from "react";

// Styles
import Styles from "../../styles/NavType.module.scss";

interface INavItem {
  text: string;
  href: string;
  icon: IconDefinition;
}

// Nav Item
const NavItem: FC<INavItem> = ({ text, href, icon }) => {
  return (
    <a
      href={href}
      className={`nav-link fs-4 position-relative ${Styles.nav_item}`}
    >
      <FontAwesomeIcon icon={icon} /> {text}
      <div className={`position-absolute rounded ${Styles.pointer}`}></div>
    </a>
  );
};

// Nav
const NavType: FC = () => {
  return (
    <Fragment>
      <nav className="nav justify-content-between pb-3">
        <NavItem icon={faClapperboard} href="#" text="Movies" />
        <NavItem icon={faTv} href="#" text="Series" />
        <NavItem icon={faMagnifyingGlass} href="#" text="Search" />
      </nav>
    </Fragment>
  );
};

export default NavType;
