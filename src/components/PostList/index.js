import React from 'react'
import './index.css'

export default function PostsList({posts}) {
    console.log(posts)
  return ( 
    <div className='postList container'>
        {
            posts.map(post=> (
                <div className="single-post" key={post.id}>{post.title}</div>
            ))
        }        
    </div>
  )
}


