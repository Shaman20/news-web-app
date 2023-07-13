import React, { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'My lorem ipsum.......', author: 'mario', id: 1},
        {title: 'Welcome Party', body: 'My lorem ipsum.......', author: 'mario', id: 2},
        {title: 'Ceremony Celebrate', body: 'My lorem ipsum.......', author: 'mario', id: 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

  return (
    <div className='home'>
       <BlogList blogs={blogs} handleDelete={handleDelete}/>
    </div>
  )
}

export default Home