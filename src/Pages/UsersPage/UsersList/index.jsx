import { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then(({ results }) => setUsers(results))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  }, []);
  return (
    <ul>
      {error && <div> ERROR !!!!</div>}
      {isFetching && <div> Data ioading ....Please wait</div>}
      {!error &&
        !isFetching &&
        users.map((u) => (
          <li key={u.login.uuid}>
            {Object.keys(u).map((key) => (
              <p key={key}>
                {key}: {JSON.stringify(u[key])}
              </p>
            ))}
          </li>
        ))}
    </ul>
  );
}

export default UsersList;
