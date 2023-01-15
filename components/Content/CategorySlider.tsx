import React, { FC, useContext, useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Styles
import Styles from "../../styles/CategorySlider.module.scss";
import { Category, CategoryResponse } from "../../interfaces/Response";
import { MediaType } from "../../interfaces/Media";

// Contexts
import { MovieContext } from "../../context/MovieContext";
import { SerieContext } from "../../context/SerieContext";

interface ICategoryItem {
  category: string;
}

const CatgoryItem: FC<ICategoryItem> = ({ category }) => {
  return (
    <li
      className={`glide__slide text-light rounded-pill py-2 text-center ${Styles.item}`}
    >
      {category}
    </li>
  );
};

const CatergorySlider: FC<{ type: MediaType }> = ({ type }) => {
  const movieContext = useContext(MovieContext);
  const serieContext = useContext(SerieContext);

  useEffect(() => {
    type == MediaType.Movie && movieContext.getCategories();
    type == MediaType.Serie && serieContext.getCategories();
  }, []);

  useEffect(() => {
    const glide = new Glide(".glide", {
      perView: 5,
      gap: 50,
    });

    if (type == MediaType.Movie && movieContext.categories.length !== 0) {
      glide.mount();
    }

    if (type == MediaType.Serie && serieContext.categories.length !== 0) {
      glide.mount();
    }

    return () => {
      glide.destroy();
    };
  }, [movieContext.categories, serieContext.categories]);

  return (
    <div className="glide mt-5 w-75 m-auto">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {type == MediaType.Movie &&
            movieContext.categories.map((v, i) => {
              return <CatgoryItem key={i} category={v.name} />;
            })}

          {type == MediaType.Serie &&
            serieContext.categories.map((v, i) => {
              return <CatgoryItem key={i} category={v.name} />;
            })}
        </ul>
      </div>

      <div className="glide__arrows position-relative" data-glide-el="controls">
        <button
          className={`glide__arrow glide__arrow--left position-absolute ${Styles.left}`}
          data-glide-dir="<"
        >
          <FontAwesomeIcon icon={faAngleLeft} className="fs-3" />
        </button>
        <button
          className={`glide__arrow glide__arrow--right position-absolute ${Styles.right}`}
          data-glide-dir=">"
        >
          <FontAwesomeIcon icon={faAngleRight} className="fs-3" />
        </button>
      </div>
    </div>
  );
};

export default CatergorySlider;
