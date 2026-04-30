import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(10);

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
    <>
      <ul>
        {error && <div> ERROR !!!!</div>}
        {isFetching && (
          <div>
            <DNA
              visible={true}
              height="100"
              width="100"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        )}
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
      <div>
        <button>
          <FcPrevious />
        </button>
        <button>
          <FcNext />
        </button>
      </div>
    </>
  );
}

export default UsersList;
