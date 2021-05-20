import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { listUsersRequest } from "../../redux/listUsersPage/actions/actionsCreators";
import { Table } from "antd";
import { nanoid } from "nanoid";

export default function ListUsers() {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);
  const { response } = useSelector((state) => state.listUsersPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsersRequest());
  }, [dispatch]);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar, obj) => {
        return (
          <>
            <Link to={`/list-users/user-${obj.id}`}>
              <img src={`${avatar}`} alt={avatar} />
            </Link>
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
          <Table columns={columns} dataSource={updateData} pagination={false} />
          {response.page === 1 && (
            <div className="pagination-list-users">
              <div className="page-list-users">{response.page}</div>
              <div
                className="up-list-users"
                onClick={() => {
                  dispatch(listUsersRequest((response.page += 1)));
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
