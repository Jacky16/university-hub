import environments from "loadEnvironment";

const { baseUrl } = environments;

const endpoints = {
  listOfUniversities: `${baseUrl}/universities`,

  getUrlUniversity: (id: number | string) => `${baseUrl}/universities/${id}`,
};

export default endpoints;
