// get all posts
export const getPosts = async() => {
    try {
        const getData = await fetch("https://jsonplaceholder.typicode.com/posts");
        const output = await getData.json();
        return output;
    } catch (error) {
        console.log("get posts errror", error);
    }
};