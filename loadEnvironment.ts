import { Environments } from "types/types";

const environments = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
} as Environments;

export default environments;
