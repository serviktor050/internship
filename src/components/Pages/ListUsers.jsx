import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { listUsersRequest } from "../../redux/listUsersPage/actions/actionsCreators";
import { Table } from "antd";
import { nanoid } from "nanoid";

export default function ListUsers() {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);
  const { data } = useSelector((state) => state.listUsersPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsersRequest());
  }, [dispatch]);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => <img src={`${avatar}`} alt={avatar} />,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
  ];

  let updateData;

  if (data) {
    updateData = data.map((item) => {
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
      <h1>Страница с пользователями</h1>
      <Table columns={columns} dataSource={updateData} />
    </>
  );
}
