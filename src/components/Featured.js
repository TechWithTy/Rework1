import React from 'react';

const Featured = ({match}) => {
let name = match.params.name;
let topic = match.params.topic;
let bio = match.params.bio;
  return (
    <div className="main-content">
      <h2>{name} </h2>
      <p>{bio} <strong></strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;