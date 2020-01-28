import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'



import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
   
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map((band) => {
          return <Band key={band.id} band={band} delete={this.props.removeBand}/>
        }
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  removeBand: id => dispatch({type: "REMOVE_BAND", id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
