import React, { FC, ReactNode } from "react";
import Carrousel, { CarrouselMovieItem } from "./Carrousel";
import Content from "./Content/Index";

const IndexBody: FC = () => {
  return (
    <main className="bg-dark">
      <Carrousel />
      <Content />
    </main>
  );
};

export default IndexBody;
