import axios from "axios";
import { getAccessToken, getProfileId } from "../utils/authHelpers";
import { BASE_URL } from "./constant";

export const getApiInstance = (config) => {
  const headerData = config?.header || {};

  let header = null;

  if (getAccessToken() && getProfileId()) {
    header = {
      ...headerData,
      Authorization: `Bearer ${getAccessToken()} `,
      "Content-Type": "application/json",
      profileId: `${getProfileId()}`,
    };
  } else {
    header = {
      ...headerData,
      "Content-Type": "application/json",
    };
  }

  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: header,
  });
  return instance;
};

export const getApiInstanceWithAuth = (config) => {
  const headerData = config?.header || {};

  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    header: {
      ...headerData,
      Authorization: `Bearer ${getAccessToken()} `,
      "Content-Type": "application/json",
      profileId: `${getProfileId()}`,
    },
  });
  return instance;
};

export const getApiInstanceForLogin = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 2500000,
    headers: {
      Authorization: "Basic YnVzaW5lc3NfYXBwOg==",
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
    },
  });
  return instance;
};

export const getApiInstanceForPassword = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 2500000,
    headers: {
      Authorization: "Basic YnVzaW5lc3NfYXBwOg==",
      "Content-Type": "application/json;text/plain, */*",
    },
  });
  return instance;
};

export const getApiInstanceForRegister = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 2500000,
    headers: {
      "Content-Type": "application/json;text/plain, */*",
    },
  });
  return instance;
};

export const getApiInstanceForExistingUser = (config) => {
  const headerData = config?.header || {};

  let header = null;

  header = {
    ...headerData,
    Authorization: "Basic YnVzaW5lc3NfYXBwOg==",
    "Content-Type": "application/json",
  };

  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: header,
  });
  return instance;
};
