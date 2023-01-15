import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { MovieContext } from "../../context/MovieContext";
import { SerieContext } from "../../context/SerieContext";
import { MediaType } from "../../interfaces/Media";

import Styles from "../../styles/Data.module.scss";

interface IDataITem {
  posterImage: string;
  title: string;
  year: number;
  stars: number;
}

const DataItem: FC<IDataITem> = ({ posterImage, title, year, stars }) => {
  const [textWidth, setTextWidth] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  function resizeText() {
    var computedStyle = getComputedStyle(ref.current!);

    var elementWidth = ref.current!.clientWidth;

    elementWidth -=
      parseFloat(computedStyle.paddingLeft) +
      parseFloat(computedStyle.paddingRight);
    setTextWidth(elementWidth);
  }

  useEffect(() => {
    resizeText();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        resizeText();
      });
    }
  }, []);

  return (
    <div ref={ref} className={`col-2 mb-4 ${Styles.data_item}`}>
      {/* Image */}
      <img src={posterImage} alt="/poster" className="img-fluid rounded mb-2" />

      {/* Title */}
      <h6 className="text-light mt-1" style={{ width: `${textWidth}px` }}>
        {title}
      </h6>
      <div className="info text-light d-flex justify-content-between">
        {/* Year */}
        <p className="mb-0 text-secondary fw-bold">{year}</p>

        {/* Stars */}
        <p className="mb-0 text-warning">
          <FontAwesomeIcon icon={faStar} /> {stars}
        </p>
      </div>
    </div>
  );
};

const Data: FC<{ type: MediaType }> = ({ type }) => {
  const movieContext = useContext(MovieContext);
  const serieContext = useContext(SerieContext);

  useEffect(() => {
    type == MediaType.Movie && movieContext.getAll();
    type == MediaType.Serie && serieContext.getAll();
  }, []);

  return (
    <section className="w-100 container-fluid m-0 mt-5 p-0">
      <div className="row">
        {/* {Array.from(Array(16).keys()).map((v) => (
          <DataItem
            key={v}
            title="Lorem ipsum dolor sit amet consectetur."
            posterImage="/posterImage.jpg"
            year={2022}
            stars={8.6}
          />
        ))} */}
        {type == MediaType.Movie &&
          movieContext.all.map((v, i) => {
            return (
              <DataItem
                key={i}
                title={v.title}
                posterImage={`https://image.tmdb.org/t/p/w500${v.poster_path}`}
                year={+v.release_date.split("-")[0]}
                stars={v.vote_average}
              />
            );
          })}

        {type == MediaType.Serie &&
          serieContext.all.map((v, i) => {
            return (
              <DataItem
                key={i}
                title={v.name}
                posterImage={`https://image.tmdb.org/t/p/w500${v.poster_path}`}
                year={+v.first_air_date.split("-")[0]}
                stars={v.vote_average}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Data;
