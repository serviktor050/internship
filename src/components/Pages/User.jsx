import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { fetchUserDataRequest } from "../../redux/userPage/actions/actionsCreators";

export default function User(props) {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);
  const { userData } = useSelector((state) => state.userPage);

  const dispatch = useDispatch();

  let id = Number(props.match.params.id);

  useEffect(() => {
    dispatch(fetchUserDataRequest(id));
  }, [dispatch]);

  return (
    <>
      {userToken === null && <Redirect to="/" />}
      {userToken !== null && userData !== null && (
        <>
          <h1>
            {`${userData.data.first_name}`}
            {` ${userData.data.last_name}`}
          </h1>
          <div
            className="back-button"
            onClick={() => {
              props.history.goBack();
            }}
          >
            Back
          </div>
        </>
      )}
    </>
  );
}
