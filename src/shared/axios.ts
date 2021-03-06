import { PROXY } from "./constants";
import axios from "axios";

const instance = axios.create({
  // baseURL: `${PROXY}https://ga-mobile-api.loklok.tv/cms/app`,
  baseURL: `https://ga-mobile-api.loklok.tv/cms/app`,
  headers: {
    lang: "en",
    versioncode: "11",
    clienttype: "ios_jike_default",
  },
});

export default instance;
