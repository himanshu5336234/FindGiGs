import axios from "axios";

export const DEV_URL = "https://dev-v2.begig.io:8082/api/v2";

export const JOB_DEV_URL = "https://dev-v2.begig.io:8083/api/v2/job";
/**
 *
 * @param {*} path  endpoint
 * @returns data from api
 */
export function apiGet(path) {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : null,
    },
  };

  return axios.get(path, config);
}

/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export function apiPost(path, data) {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : null,
      "Content-Type": "application/json",
    },
  };

  return axios.post(path, data, config);
}
/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export function apiPatch(path, data, headers = {}) {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      ...headers,
    },
  };

  return axios.patch(path, data, config);
}
/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export function apiPut(path, data) {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  return axios.put(path, data, config);
}
/**
 *
 * @param {*} path   endpoint
 * @param {*} data params
 * @returns   data from api
 */
export function apiDelete(path, data) {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  return axios.delete(path, { ...config, ...data });
}

/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export function apiPostWithCustomToken(path, data, token) {
  const config = {
    headers: {
      Authorization: token ? `Basic ${token}` : null,
      "Content-Type": "application/json",
    },
  };

  return axios.post(path, data, config);
}

const instance = axios.create();

export default instance;
