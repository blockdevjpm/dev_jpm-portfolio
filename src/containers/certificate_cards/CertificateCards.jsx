import React from 'react';
import "./certificate_cards.css";

const CertificateCards = (props) => {
  return (
    <div className='certificate_card'>
      <a href={props.website} target="_blank" rel='noreferrer'>
        <img src={props.image} alt="img" className='certificate_card_img' />
      </a>
      <p className='certificate_card_title'>{props.title}</p>
    </div>
  )
}

export default CertificateCards