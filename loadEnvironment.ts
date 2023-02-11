import { Environments } from "types/types";

const environments = {} as Environments;

if (process.env) {
  const { NEXT_PUBLIC_BASE_URL } = process.env;

  environments.baseUrl = NEXT_PUBLIC_BASE_URL!;
}

export default environments;
