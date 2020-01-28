import React from 'react'
import PropTypes from 'prop-types'

const Band = (props) => {
  return (
    <div>
      <li>
      <h2>{props.band.name}</h2>
      <button onClick={() => props.deleteBand(props.band.id)}>Delete</button>
      </li>
    </div>
  )
}


export default Band


