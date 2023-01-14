import React, { FC, ReactNode } from "react";

import CategorySlider from "./CategorySlider";
import NavType from "./NavType";
import Filter from "./Filter";
import Data from "./Data";
import MoreButton from "./MoreButton";

import Styles from "../../styles/Content.module.scss";

const Content: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <section className={`mt-5 w-75 pb-4 m-auto ${Styles.content}`}>
      {/* <NavType />
      <hr className="text-light" /> */}
      {/* <CategorySlider />
      <Filter />
      <Data /> */}
      {/* <MoreButton /> */}
      {children}
    </section>
  );
};

export default Content;
