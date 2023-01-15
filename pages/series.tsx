import { NextPage } from "next";

// Enum
import { MediaType } from "../interfaces/Media";

// Components
import CarrouselSerie from "../components/CarrouselSerie";
import CatergorySlider from "../components/Content/CategorySlider";
import Data from "../components/Content/Data";
import Filter from "../components/Content/Filter";
import Content from "../components/Content/Index";
import MoreButton from "../components/Content/MoreButton";
import NavType from "../components/Content/NavType";
import IndexBody from "../components/IndexBody";
import Layout from "../components/Layout";
import { SerieProvider } from "../context/SerieContext";

const MoviesPage: NextPage = () => {
  return (
    <Layout>
      <SerieProvider>
        <IndexBody>
          {/* CARROUSEL */}
          <CarrouselSerie />

          {/* CONTENT */}
          <Content>
            <NavType />
            <hr className="text-light" />
            <CatergorySlider type={MediaType.Serie} />
            <Filter />
            <Data type={MediaType.Serie} />
            <MoreButton />
          </Content>
        </IndexBody>
      </SerieProvider>
    </Layout>
  );
};

export default MoviesPage;
