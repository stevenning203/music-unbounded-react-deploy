import React, { useState } from 'react';
import BlogEntry from '../components/BlogEntry/BlogEntry';
import './Blog.css';

export default function Blog()
{
    return(
        <div id = "blog-page-wrapper">
            <BlogEntry blog_link = "/blog/about" content = "This is the Music Unbounded blog! We will post updates here for our organization. Please check reglarly to be aware of recital dates and other events." title = "Nothing here! Check back soon :)" date = "September 8th, 2021" />
        </div>
    )
}