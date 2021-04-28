import React from "react";
import { Link } from "react-router-dom";

import "./Pagination.scss";

export default function Pagination(props) {
  return (
    <div className="pagination">
      {[...Array(Math.floor(props.totalUsersFound / 30))].map((e, i) => (
        <Link
          to={"/search/" + props.query + "/" + (i + 1)}
          key={i + 1}
          onClick={(e) => {
            // e.preventDefault();
            props.handlePagination(i + 1);
          }}
          className={parseInt(props.currentPatge) === i + 1 ? "active" : ""}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
}
