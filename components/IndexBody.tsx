import React, { FC, ReactNode } from "react";
import Carrousel, { CarrouselMovieItem } from "./CarrouselMovie";
import Content from "./Content/Index";

const IndexBody: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <main className="bg-dark">
      {children ? (
        children
      ) : (
        <>
          <Carrousel />
          <Content />
        </>
      )}
    </main>
  );
};

export default IndexBody;
