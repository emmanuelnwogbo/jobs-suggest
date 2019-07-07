import React from 'react';

import '../scss/components/suggestcard.scss';

const Suggestcard = ({
  name,
  image,
  profession,
  state,
  companyName,
  role
}) => {
  return (
    <div className={'suggestcard'}>
      <figure>
        <img src={image}/>
      </figure>
      <div className={'suggestcard__right'}>
        <h3>{name ? name : companyName}</h3>
        <p>{ profession ? profession : role }</p>
      </div>
    </div>
  )
}

export default Suggestcard;