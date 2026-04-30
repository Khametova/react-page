import { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then(({ results }) => setUsers(results))
      .catch((e) => console.log("e", e));
  });
  return (
    <ul>
      {users.map((u) => (
        <li>{JSON.stringify(u)}</li>
      ))}
    </ul>
  );
}

export default UsersList;
