import axios from "axios";
// get all posts
export const getPosts = async() => {
  try {
    const getData = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const output = await getData.data;
    return output;
  } catch (error) {
    console.log("get posts errror", error);
  }
};