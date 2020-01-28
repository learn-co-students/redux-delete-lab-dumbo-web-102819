import React from 'react'
import PropTypes from 'prop-types'

const Band = (props) => {
  return (
    <div>
      <h2>{props.band.name}</h2>
      <button onClick={() => props.deleteBand(props.band.id)}>Delete Band</button>
    </div>
  )
}


export default Band


