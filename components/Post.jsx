import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';

export const Post = ({ post }) => {

  const {title, link, kind, description} = post

  const extras = () => {
    if (kind === "video") {
      return (<p className="border p-2 m-2">youtube embed</p>)
    }
  }
  
  return (
    <a href={link}>
      <div className="border my-4 p-4">
        <h2 className="text-lg">{title}</h2>
        { extras() }
        { description ?
          <p>{ description }</p>
          :
          null
        }
      </div>
    </a>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
};

