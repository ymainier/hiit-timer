import React from 'react';

export default function Exercise({title, imageSource}) {
  return <div>
    <h1>{title}</h1>
    <img src={imageSource} alt={title} />
  </div>;
}
