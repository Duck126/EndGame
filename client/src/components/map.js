import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const Austin = {
    lat: 30.2947, lng: -97.7404,
    lat: 30.5747, lng: -97.6404,
    lat: 30.1747, lng: -97.3404,
    lat: 30.0747, lng: -97.2404

}

class Map extends Component {
    render() {
        const MapMaker = withGoogleMap(props => (
            <GoogleMap 
                defaultCenter = {Austin}
                defaultZoom = { 13 } 
                >
            </GoogleMap>
        ));
        return(
            <container>
                <div xs={8}  >
                    <MapMaker
                        containerElement={ <div style={{ height:'100%', width: '100%'  }} /> }
                        mapElement={ <div style={{ height: '500px' }} /> }
                    />
                </div>
            </container>
        )
    }//Map End
}

export default Map;