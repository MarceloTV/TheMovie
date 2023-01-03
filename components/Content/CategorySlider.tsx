import React, { FC, useEffect } from "react";
import Glide from "@glidejs/glide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Styles
import Styles from "../../styles/CategorySlider.module.scss";

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

const CatergorySlider: FC = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      perView: 5,
      gap: 50,
    });

    glide.mount();
    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="glide mt-5 w-75 m-auto">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {Array.from(Array(16).keys()).map((v) => {
            return <CatgoryItem key={v} category="Action" />;
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
