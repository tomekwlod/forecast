import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class  WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const temp = _.map(cityData.list.map(weather => weather.main.temp), (t) => t-273)
        const press = cityData.list.map(weather => weather.main.pressure)
        const hum = cityData.list.map(weather => weather.main.humidity)
        const { lon, lat } = cityData.city.coord; // ES6
        
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temp} color="orange" units="˚C" /></td>
                <td><Chart data={press} color="green" units="hPa" /></td>
                <td><Chart data={hum} color="blue" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Press</th>
                        <th>Hum</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// ES6 in steps (from bottom to here)
function mapStateToProps({ weather }) {
    return { weather }
}
// function mapStateToProps({ weather }) {
//     return { weather : weather }
// }
// function mapStateToProps(state) {
//     return { weather : state.weather }
// }

export default connect(mapStateToProps)(WeatherList)