import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then(res =>
    dispatch({
      type: FETCH_POSTS,
      payload: res.data
    })
  );
};

export const createPost = post => dispatch => {
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(post),
    url: "https://jsonplaceholder.typicode.com/posts"
  };

  axios(options).then(res => dispatch({
    type: NEW_POST,
    payload: res.data
  }));

};
