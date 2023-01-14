import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Movie, Serie } from "../interfaces/Media";

import Styles from "../styles/Carrousel.module.scss";

interface ICarrouselSerieItem {
  active?: boolean;
  name: string;
  overview: string;
  background: string;
}

const CarrouselSerieItem: FC<ICarrouselSerieItem> = (props) => {
  return (
    <div
      className={`carousel-item ${props.active ? "active" : ""} w-100 h-100`}
    >
      <div
        className={`w-100 h-100 p-5 d-flex align-items-center ${Styles.movie_container}`}
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url("https://image.tmdb.org/t/p/original${props.background}")
          `,
        }}
      >
        <div className="w-25 text-white">
          <h2 className="mb-3">{props.name}</h2>
          <p className="mb-3">{props.overview}</p>
          <button className={`btn w-25 rounded-5 ${Styles.button_details}`}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const CarrouselSerie: FC = () => {
  const [active, setActive] = useState<number>(0);

  const button1 = useRef<HTMLButtonElement>(null);
  const button2 = useRef<HTMLButtonElement>(null);
  const button3 = useRef<HTMLButtonElement>(null);

  const [data, setData] = useState<Serie[]>([]);

  useEffect(() => {
    fetch("/api/get_trending/serie")
      .then((data) => data.json())
      .then(({ series }: { series: Serie[] }) => {
        setData(series);
        console.log(series);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active === 0) {
        button2.current?.click();
      }

      if (active === 1) {
        button3.current?.click();
      }

      if (active === 2) {
        button1.current?.click();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          ref={button1}
          onClick={() => setActive(0)}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          ref={button2}
          onClick={() => setActive(1)}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          ref={button3}
          onClick={() => setActive(2)}
        ></button>
      </div>
      <div className={`carousel-inner ${Styles.item_container}`}>
        {/* TRENDING */}
        {data?.map((v, i) => {
          return (
            <CarrouselSerieItem
              active={i === 0}
              key={i}
              name={v.name}
              overview={v.overview}
              background={v.backdrop_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export { CarrouselSerieItem };

export default CarrouselSerie;
