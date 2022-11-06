import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.src} alt="placeholder" />
      <div className="uppertext">
        <h1>{props.title}</h1>
        <div className="text">
          <div className="left">
            <h2>{props.location}</h2>
            <h3>AUD {props.price}</h3>
          </div>
          <div className="right">
            <h4> Rooms: {props.rooms}</h4>
            <h4>Baths: {props.baths}</h4>
          </div>
      </div>
      </div>

    </div>
  )
}

export default Card