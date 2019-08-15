import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button onClick={() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name} <span> ({props.feature.price})</span>
    </li>
  );
};

export default AddedFeature;
