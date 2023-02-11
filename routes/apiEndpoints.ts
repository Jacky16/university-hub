import environments from "loadEnvironment";

const { baseUrl } = environments;

const endpoints = {
  listOfUniversities: `${baseUrl}/universities`,
};

export default endpoints;
