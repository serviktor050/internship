import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { fetchUserDataRequest } from "../../redux/userPage/actions/actionsCreators";

export default function User(props) {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);
  const { userData } = useSelector((state) => state.userPage);

  const dispatch = useDispatch();

  const history = useHistory();
  let id = Number(props.match.params.id);

  useEffect(() => {
    dispatch(fetchUserDataRequest(id));
  }, [dispatch, id]);

  return (
    <>
      {userToken === null && <Redirect to="/" />}
      {userToken !== null && userData !== null && (
        <>
          <h1>
            {`${userData.data.first_name}`}
            {` ${userData.data.last_name}`}
          </h1>
          <div className="user-card">
            <div className="user-image">
              <img
                src={`${userData.data.avatar}`}
                alt={`${userData.data.first_name} ${userData.data.last_name}`}
              />
            </div>
            <div className="user-info">
              <div className="user-info-name">
                <p>Name:</p>
                {` ${userData.data.first_name}`}
                {` ${userData.data.last_name}`}
              </div>
              <div className="user-info-email">
                <p>e-mail:</p> {` ${userData.data.email}`}
              </div>
            </div>
          </div>
          <div
            className="back-button"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </div>
        </>
      )}
    </>
  );
}
