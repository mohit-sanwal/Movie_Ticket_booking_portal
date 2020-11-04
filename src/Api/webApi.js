import axios from "axios";
import config from "../config";

export const WebApi = {
  getAllPosts: () =>
    axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts`,
    }),
};
