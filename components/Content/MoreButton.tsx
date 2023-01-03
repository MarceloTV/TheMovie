import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";

const MoreButton: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <button
      style={{ width: "50px", height: "50px" }}
      className="btn btn-secondary rounded-circle m-auto mt-3 d-flex justify-content-center align-items-center p-0"
      onClick={() => setLoading(!loading)}
    >
      {!loading && <FontAwesomeIcon icon={faPlus} className="fs-3" />}
      {loading && (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </button>
  );
};

export default MoreButton;
