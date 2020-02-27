import React from 'react'
import Band from './Band'

class Bands extends React.Component {

    mapAllBands = () => {
        console.log(this.props.bands)
        return this.props.bands.map(band => {
            return <Band deleteBand={this.props.deleteBand} band={band} key={band.id} />
        })
    }
    render() {
        return (
            <ul>
                {this.mapAllBands()}
            </ul>
        )
    }
}

export default Bands 