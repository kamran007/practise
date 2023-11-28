/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react"


export const PostList = createContext({
    postList: [],
    addPost : ()=>{},
    deletePost: ()=>{}
});
const initialValue = [
    {
        id:"1",
        title: "12th parliamentary polls: IGP’s brother Chowdhury Abdullah Al Mahmud gets AL nomination",
        body: "Inspector General of Police (IGP) Chowdhury Abdullah Al-Mamun’s younger brother Chowdhury Abdullah Al Mahmud has got nominated as governing Awami League candidate for Sunamganj-2 (Derai-Shalla) constituency for the upcoming general election.",
        reactions: 2,
        userId: "user-19",
        tags: ["Sunamganj-2","Awami League candidate","IGP's","parliamentary polls"]
    },
    {
        id:"2",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque placeat reprehenderit aperiam vel voluptas temporibus aut tenetur dolore enim? Nihil labore, praesentium fugiat libero ratione impedit dolor? Rerum, quisquam odit.",
        reactions: 200,
        userId: "user-19",
        tags: ["Lorem","ipsum","dolor"]
    }
]

const postListReducer = (state, action)=>{
    let newPostList = state;
    if(action.type === 'NEW_POST'){
        newPostList = [
            action.payload,
            ...state,
        ]
    } else if(action.type === 'DELETE_POST'){
        newPostList = state.filter(post=> post.id != action.payload.id)
    }
    return newPostList;
}

const PostListProvider = ({children})=>{
    const [postList, dispatch] = useReducer(postListReducer,initialValue);
    const addPost = (title,body,reactions,userId,tags)=>{
        dispatch({
            type: "NEW_POST",
            payload:{
                id: Date.now(),
                title,
                body,
                reactions,
                userId,
                tags: tags.split(' ')
            }
        })
    }
    const deletePost = (id)=>{
        dispatch({
            type: "DELETE_POST",
            payload:{
                id
            }
        })
    }
    return(
        <PostList.Provider value ={{postList,addPost,deletePost}}>
            {children}
        </PostList.Provider>
    );
}
export default PostListProvider;