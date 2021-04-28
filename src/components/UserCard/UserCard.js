import React from "react";
import { Link } from "react-router-dom";

import "./UserCard.scss";

export default function UserCard(props) {
  return (
    <div>
      <Link to={"/user/" + props.user.login}>
        <div className="user-card">
          <div className="user-image-wrapper">
            <img className="user-image" src={props.user.avatar_url} alt="" />
          </div>
          <div className="user-name">{props.user.login}</div>
        </div>
      </Link>
    </div>
  );
}
