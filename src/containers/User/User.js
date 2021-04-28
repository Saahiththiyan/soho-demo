import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import UserCard from "../../components/UserCard/UserCard";
import "./User.scss";

import {
  getFollowers,
  getFollowing,
  getRepos,
  getUser,
} from "../../store/actions/actions";

export default function User() {
  const user = useSelector((state) => state.users.userData);
  const repos = useSelector((state) => state.users.repos);
  const following = useSelector((state) => state.users.following);
  const followers = useSelector((state) => state.users.followers);

  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(getFollowers(name));
    dispatch(getFollowing(name));
    dispatch(getRepos(name));
    dispatch(getUser(name));
  }, [dispatch, name]);
  return (
    <div className="user-wrapper">
      <div className="json-string">{JSON.stringify(user)}</div>
      <Link className="button" to="/search">
        Search
      </Link>
      <div className="user-profile"></div>
      <div className="row">
        <div className="column">
          <h3>Repositories</h3>
          {repos.map((repo) => {
            return (
              <div className="col-item" key={repo.id}>
                {repo.name}
              </div>
            );
          })}
        </div>
        <div className="column">
          <h3>Following</h3>
          {following.map((follow) => {
            return <UserCard key={follow.id} user={follow} />;
          })}
        </div>
        <div className="column">
          <h3>Followers</h3>
          {followers.map((follower) => {
            return <UserCard key={follower.id} user={follower} />;
          })}
        </div>
      </div>
    </div>
  );
}
