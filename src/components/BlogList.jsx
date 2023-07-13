const BlogList = ({blogs, handleDelete}) => {

  return (
    <div className='blog-list'>
         {blogs.map(blog => (
            <div className='blog-preview' key={blog.id} >
                <h4>{blog.title}</h4>
                <p>This is the body {blog.body}</p>
                <p>Written by {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default BlogList