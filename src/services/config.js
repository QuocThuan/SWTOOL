import axios from "axios";

const Token = "b1704311a";

export const https = axios.create({
  baseURL: "https://swarfarm.com/api/v2/",
  headers: {
    Authorization: `JWT ${Token}`,
  },
  timeout: 150000,
});
