import React, { useState } from 'react'
import './index.css'

export default function PostForm({addPost}) {
  let [title,setTitle] = useState("");
  let [status,setStatus] = useState("upcoming");
  let savePost = (e) =>{
    e.preventDefault();
    let post = {
      id :Math.floor(Math.random()*10000),
      title : title,
      status : status
    }
    addPost(post)
  }
  return (
    <form className='post-form' onSubmit={savePost}>
        <h1>Create Post</h1>
        <div className="form-control">
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="">Status</label>
          <select value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value="ongoing">Ongoing</option>
            <option value="upcoming">Upcoming</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>
        <div className="form-control">
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}
