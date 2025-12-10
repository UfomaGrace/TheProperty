import React from 'react'
import Blogh from './Blogh'
import Blogbreadcrumb from './Blogbreadcrumb'
import BlogPost from './BlogPost'
import BlogHeadlines from './BlogHeadlines'

export default function Blog() {
  return (
    <div>
        <Blogh />
        <Blogbreadcrumb />
        <BlogPost />
        <BlogHeadlines />
    </div>
  )
}
