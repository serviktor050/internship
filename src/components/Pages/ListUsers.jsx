import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { listUsersRequest } from "../../redux/listUsersPage/actions/actionsCreators";
import { Table } from "antd";
import { nanoid } from "nanoid";

export default function ListUsers(props) {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);
  const { response } = useSelector((state) => state.listUsersPage);

  const history = useHistory();

  let pageNumber = props.location.search.substr(6);

  const dispatch = useDispatch();

  useEffect(() => {
    if (pageNumber !== "") {
      dispatch(listUsersRequest(pageNumber));
    } else {
      dispatch(listUsersRequest());
    }
  }, [dispatch, pageNumber]);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => {
        return (
          <>
            <img src={`${avatar}`} alt={avatar} />
          </>
        );
      },
    },
    {
      title: "First name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  let updateData;

  if (response !== null) {
    updateData = response.data.map((item) => {
      return {
        id: item.id,
        avatar: item.avatar,
        email: item.email,
        first_name: item.first_name,
        last_name: item.last_name,
        key: nanoid(),
      };
    });
  }

  return (
    <>
      {userToken === null && <Redirect to="/" />}
      <h1>Пользователи</h1>
      {response !== null && (
        <>
          <Table
            columns={columns}
            dataSource={updateData}
            pagination={false}
            onRow={(record) => {
              return {
                onClick: (event) => {
                  return history.push(`/list-users/user-${record.id}`);
                },
              };
            }}
          />
          {response.page === 1 && (
            <div className="pagination-list-users">
              <div className="page-list-users">{response.page}</div>
              <div
                className="up-list-users"
                onClick={() => {
                  dispatch(listUsersRequest((response.page += 1)));
                  history.push(`/list-users?page=${response.page}`);
                }}
              >
                +
              </div>
            </div>
          )}
          {response.page === response.total_pages && (
            <div className="pagination-list-users">
              <div
                className="down-list-users"
                onClick={() => {
                  dispatch(listUsersRequest((response.page -= 1)));
                  if (response.page === 1) {
                    history.push(`/list-users`);
                  } else {
                    history.push(`/list-users?page=${response.page}`);
                  }
                }}
              >
                -
              </div>
              <div className="page-list-users">{response.page}</div>
            </div>
          )}
        </>
      )}
    </>
  );
}
