import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { loadUsers } from "../../../api";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(10);
  const [gender, setGender] = useState("male");

  useEffect(() => {
    const savedPage = Number(window.localStorage.getItem(`page`));
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(`page`, currentPage);
  }, [currentPage]);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    loadUsers({ page: currentPage, results, gender })
      .then(({ results }) => setUsers(results))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  }, [currentPage, gender]);

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const goNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const changeGender = ({ target: { value } }) => setGender(value);

  return (
    <>
      <label>
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          name="gender"
          onChange={changeGender}
        />
        MALE
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          name="gender"
          onChange={changeGender}
        />
        FEMALE
      </label>

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
              <img
                src={u.picture.thumbnail}
                alt={u.name.first + " " + u.name.last}
              />
              <p>
                {u.name.first} {u.name.last}
              </p>
            </li>
          ))}
      </ul>
      <div>
        <button onClick={goPrevPage} disabled={currentPage === 1}>
          <FcPrevious />
        </button>
        <span>{currentPage}</span>
        <button onClick={goNextPage}>
          <FcNext />
        </button>
      </div>
    </>
  );
}

export default UsersList;
