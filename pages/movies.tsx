import { NextPage } from "next";

// Movie Provider
import { MovieProvider } from "../context/MovieContext";

// Enum
import { MediaType } from "../interfaces/Media";

// Components
import CarrouselMovie from "../components/CarrouselMovie";
import CatergorySlider from "../components/Content/CategorySlider";
import Data from "../components/Content/Data";
import Filter from "../components/Content/Filter";
import Content from "../components/Content/Index";
import MoreButton from "../components/Content/MoreButton";
import NavType from "../components/Content/NavType";
import IndexBody from "../components/IndexBody";
import Layout from "../components/Layout";

const MoviesPage: NextPage = () => {
  return (
    <Layout>
      <MovieProvider>
        <IndexBody>
          {/* CARROUSEL */}
          <CarrouselMovie />

          {/* CONTENT */}
          <Content>
            <NavType />
            <hr className="text-light" />
            <CatergorySlider type={MediaType.Movie} />
            <Filter />
            <Data type={MediaType.Movie} />
            <MoreButton />
          </Content>
        </IndexBody>
      </MovieProvider>
    </Layout>
  );
};

export default MoviesPage;
