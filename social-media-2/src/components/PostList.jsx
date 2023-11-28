/* eslint-disable react-refresh/only-export-components */
// import { useContext } from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const postLoader = ()=>{
    return fetch("https://dummyjson.com/posts")
    .then(res=> res.json())
    .then(data=>data.posts);
}
const PostList = ()=>{
    const postList = useLoaderData();
    return (
        <>
        { postList.map(post=> <Post key={post.id} post={post}/>)}
        </>
    );
}
export default PostList;