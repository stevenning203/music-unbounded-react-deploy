import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogEntry = ({title, date, content, blog_link, date_class_name = "blog-date", wrapper_class_name = "blog-wrapper", button_class_name = "blog-button", title_class_name = "blog-title", content_class_name = 'blog-blurb' }) =>
{
    return(
        
        <div className = {wrapper_class_name}>
            <div className = {title_class_name}>
                {title}
            </div>
            <div className = {date_class_name}>
                {date}
            </div>
            <div className = {content_class_name}>
                {content}
            </div>
            <Link to = {blog_link}>
                <div className = {button_class_name}>
                    Read more
                </div>
            </Link>
        </div>
    )
}

export default BlogEntry