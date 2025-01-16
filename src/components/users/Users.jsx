

import { useEffect, useState } from "react";
import styled from "styled-components";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Title>User List</Title>
      <UserList>
        {users.map((user) => (
          <UserItem key={user.id}>
            <UserName>{user.name}</UserName>
            <UserDetail>Email: {user.email}</UserDetail>
            <UserDetail>Phone: {user.phone}</UserDetail>
          </UserItem>
        ))}
      </UserList>
    </Container>
  );
};

export default Users;
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const UserItem = styled.li`
  background: #f9f9f9;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h2`
  margin: 0 0 10px;
  color: #007bff;
`;

const UserDetail = styled.p`
  margin: 5px 0;
  color: #555;
`;
