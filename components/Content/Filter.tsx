import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";

// Styles
import Styles from "../../styles/Filter.module.scss";

interface ISelect {
  title?: string;
  values: string[];
}

const Select: FC<ISelect> = ({ title, values }) => {
  return (
    <select
      className={`form-select text-light rounded-pill ms-3 ${Styles.select}`}
      aria-label="Default select"
      onFocus={(e) => {
        e.currentTarget.classList.add(Styles.active);
      }}
      onBlur={(e) => {
        e.currentTarget.classList.remove(Styles.active);
      }}
    >
      {title && <option defaultValue={title}>{title}</option>}
      {values.map((v) => {
        return (
          <option key={v} value={v}>
            {v}
          </option>
        );
      })}
    </select>
  );
};

const Range: FC = () => {
  const [state, setState] = useState("3.5");

  return (
    <div className="d-flex align-items-center w-25 justify-content-end">
      <FontAwesomeIcon icon={faStar} className="text-warning" />
      <input
        type="range"
        min={0}
        step={0.1}
        defaultValue={3.5}
        max={10}
        name="stars"
        className="form-range mx-3 w-50"
        onChange={(e) => setState(e.currentTarget.value)}
      />
      <p className="mb-0 text-light" style={{ width: "21px" }}>
        {state}
      </p>
    </div>
  );
};

const NormalFilters: FC = () => {
  return (
    <div className="w-50 d-flex align-items-center">
      <p className="mb-0 ms-3 text-light">Sort by:</p>
      <Select title="Upload Date" values={["Latest", "Oldest"]} />
      <Select title="Year" values={["2023", "2022", "2021"]} />
      <Select title="Name" values={["A-Z", "Z-A"]} />
    </div>
  );
};

const Filter: FC = () => {
  return (
    <div className="mt-5 d-flex align-items-center justify-content-between">
      <NormalFilters />
      <Range />
    </div>
  );
};

export default Filter;
