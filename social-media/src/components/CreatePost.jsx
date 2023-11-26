import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
const CreatePost = ()=>{
    const {addPost} = useContext(PostList);
    const userIdElement = useRef();
    const titleElement = useRef();
    const bodyElement = useRef();
    const reactionsElement = useRef();
    const tagElement = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const userId = userIdElement.current.value;
        const title = titleElement.current.value;
        const body = bodyElement.current.value;
        const reaction = reactionsElement.current.value;
        const tags = tagElement.current.value;
        addPost(title,body,reaction,userId,tags);
    }
    return(
        <form className="add-post-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter Your User Id here</label>
                <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Your User Id"/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={titleElement} className="form-control" id="title" placeholder="How are you feeling today"/>
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea className="form-control" ref={bodyElement} id="body" placeholder="Tell us more about it" rows="5"/>
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of reactions</label>
                <input type="number" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your hash tags here</label>
                <input type="text" ref={tagElement} className="form-control" id="tags" placeholder="Please enter tags using space"/>
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    );
}

export default CreatePost;