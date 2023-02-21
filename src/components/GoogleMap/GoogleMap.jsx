import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '350px',
  height: '250px'
};

const center = {
  lat: 0.35841400089283665,
  lng: -78.11149747443214
};

function GoogleMapa() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCYbJG1Ki5KTSl4tfK0PDiKpiw0X46CtOI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMapa)