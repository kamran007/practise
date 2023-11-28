/* eslint-disable react-refresh/only-export-components */
import { Form, redirect } from "react-router-dom";

export const createPostAction = async(data) => {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");
    console.log(postData);
    fetch("https://dummyjson.com/posts/add",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    }
    ).then(res=> res.json())
    .then(post=> console.log(post));
    return redirect("/");
}
const CreatePost = ()=>{
    return(
        <Form className="add-post-form" method="POST">
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter Your User Id here</label>
                <input type="text" name="userId" className="form-control" id="userId" placeholder="Your User Id"/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" name="title" className="form-control" id="title" placeholder="How are you feeling today"/>
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea className="form-control" name="body" id="body" placeholder="Tell us more about it" rows="5"/>
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of reactions</label>
                <input type="number" name="reactions" className="form-control" id="reactions" placeholder="How many people reacted to this post"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your hash tags here</label>
                <input type="text" name="tags" className="form-control" id="tags" placeholder="Please enter tags using space"/>
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </Form>
    );
}

export default CreatePost;