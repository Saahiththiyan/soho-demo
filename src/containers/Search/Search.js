import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./Search.scss";
import developerActivityImage from "../../images/undraw_developer_activity_bv83.svg";
import blonkCanvasImage from "../../images/undraw_blank_canvas_3rbb.svg";
import UserCard from "../../components/UserCard/UserCard";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import { getUsers } from "../../store/actions/actions";

export default function Search() {
  const users = useSelector((state) => state.users.usersData);
  const totalUsersFound = useSelector((state) => state.users.totalCount);
  const isLoading = useSelector((state) => state.users.isLoading);

  const [query, setQuery] = useState("");
  const [timeoutVar, setTimeoutVar] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  const { name, pageNo } = useParams();

  const onSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
    if (timeoutVar) clearTimeout(timeoutVar);
    setTimeoutVar(
      setTimeout(function () {
        dispatch(getUsers(e.target.value, pageNumber));
      }, 1000)
    );
  };
  const handlePagination = (page) => {
    setPageNumber(page);
    dispatch(getUsers(query, page));
  };

  useEffect(() => {
    if (name && pageNo) {
      dispatch(getUsers(name, pageNo));
      setPageNumber(pageNo);
      setQuery(name);
    }
  }, [dispatch, name, pageNo]);

  return (
    <div>
      <div className="search-header">
        <img className="gh-image" src={developerActivityImage} alt="" />
        <input
          className="gh-search"
          placeholder="Search user"
          type="text"
          value={query}
          onChange={onSearch}
        />
        {/* <button onClick={onSearch}>find</button> */}
      </div>
      {users.length > 0 ? (
        <div>
          {isLoading === true ? (
            <div className="loader">
              <Loader></Loader>
            </div>
          ) : (
            <div>
              <div className="gh-users-list">
                {users.map((user) => {
                  return <UserCard key={user.id} user={user} />;
                })}
              </div>
              <div className="pagination">
                <Pagination
                  query={query}
                  totalUsersFound={totalUsersFound}
                  handlePagination={handlePagination}
                  currentPatge={pageNumber}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {isLoading === true ? (
            <div className="loader">
              <Loader></Loader>
            </div>
          ) : (
            <div className="no-results-wrapper">
              <img className="no-results" src={blonkCanvasImage} alt="" />
              <p>Coudn't find users</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
