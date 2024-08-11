import ky from "ky";
import { BASE_URL, VERSION } from "./api.config";

export const client = ky.create({
  prefixUrl: `${BASE_URL}${VERSION}/`,
});
