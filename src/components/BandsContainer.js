import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'

import { connect } from 'react-redux'

class BandsContainer extends Component {

  // mapAllBands = () => {
  //   return this.props.bands.map((band) => {
  //     return <Band band={band} key={band.name} /> 
  //   })
  // }
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands deleteBand={this.props.deleteBand} bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name: name }),
  deleteBand: bandId => dispatch({type: "DELETE_BAND", id: bandId})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
