import queryString from "query-string";

export const loadUsers = (options) => {
  const defaultOptions = {
    page: 1,
    results: 10,
    seed: `pe2024`,
  };

  const resultsOptions = {
    ...defaultOptions,
    ...options,
  };
  const { currentPage, results } = resultsOptions;

  return fetch(
    `https://randomuser.me/api/?${queryString.stringify(resultsOptions)}`,
  ).then((response) => response.json());
};
