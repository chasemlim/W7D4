import React from 'react';
import { Link } from 'react-router-dom';

export default ({poke}) => {
  return (
    <li key={poke.id}>
      <Link to={"/pokemon/" + poke.id}>
        <h3>{poke.name}</h3> 
        <img src={`${poke.image_url}`}/>
      </Link>
    </li>);
};
