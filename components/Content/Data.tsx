import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useEffect, useRef, useState } from "react";

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

const Data: FC = () => {
  return (
    <section className="w-100 container-fluid m-0 mt-5 p-0">
      <div className="row">
        {Array.from(Array(16).keys()).map((v) => (
          <DataItem
            key={v}
            title="Lorem ipsum dolor sit amet consectetur."
            posterImage="/posterImage.jpg"
            year={2022}
            stars={8.6}
          />
        ))}
      </div>
    </section>
  );
};

export default Data;
