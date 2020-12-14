import React, { Component } from "react";
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
} from "react-google-maps";
const MyMapComponent = withScriptjs(
	withGoogleMap((props) => (
		<GoogleMap defaultZoom={8} defaultCenter={{ lat: 30.7333, lng: 76.7794 }}>
			{props.isMarkerShown && (
				<Marker position={{ lat: 33.6957, lng: 73.0113 }} />
			)}
		</GoogleMap>
	))
);
class App extends Component {
	render() {
		return (
			<div style={{ width: "100vw", height: "100vh" }}>
				<MyMapComponent
					isMarkerShown
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: "100%" }} />}
					containerElement={<div style={{ height: "100%" }} />}
					mapElement={<div style={{ height: "100%" }} />}
				/>
			</div>
		);
	}
}

export default App;
