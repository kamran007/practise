/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
const Post = ({post})=>{
    const {deletePost} = useContext(PostList);
    return(
        <div className="card post-card" style={{width: "30rem"}}>
            <div className="card-body">
                <h5 className="card-title">{post.title}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> deletePost(post.id)}>
                    <AiOutlineDelete/>
                </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag)=> <span key={tag} className="badge text-bg-primary me-2">{tag}</span>)}
                <div className="alert alert-success mt-2" role="alert">
                    { `This Post has been Reacted by ${post.reactions} people.`}
                </div>
            </div>
        </div>
    )
}

export default Post;