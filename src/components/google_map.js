import React, { Component } from 'react'

class GoogleMap extends Component {
    componentDidMount() {
        // this.refs.map finds a html tag and replaces it with the map
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        // this.refs.map
        return <div ref="map" />
    }
}

export default GoogleMap;