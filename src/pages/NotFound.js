import React from 'react';
import "./NotFound.css";

export default function NotFound()
{
    return (
        <div id = "not-found-wrapper">
            <div id = "not-found-title">
                404
            </div>
            <div id = "not-found-blurb">
                The page you were looking for was not found or an error occured.
            </div>
        </div>
    )
}