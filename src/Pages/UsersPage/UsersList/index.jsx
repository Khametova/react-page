import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(3);
  const [results, setResults] = useState(10);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    fetch(
      "https://randomuser.me/api/?page=${currentPage}&results=${results}&seed=pe2024",
    )
      .then((response) => response.json())
      .then(({ results }) => setUsers(results))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  }, [currentPage]);

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const goNextPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page + 1);
    }
  };

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
        <button onClick={goPrevPage}>
          <FcPrevious />
        </button>
        <button onClick={goNextPage}>
          <FcNext />
        </button>
      </div>
    </>
  );
}

export default UsersList;
