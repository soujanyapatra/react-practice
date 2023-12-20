import React, { useEffect, useMemo, useState } from 'react';
import Map from 'react-map-gl';
import http from '../../plugins/axios'

function MapBox() {
  const [ latitude, setLatitude ] = useState('')
  const [ longitude, setLongitude ] = useState('')

  const geojson = useMemo(() =>{
    return {
      type: 'FeatureCollection',
      features: [
        { type: 'Feature', geometry: { type: 'Point', coordinates: [latitude, longitude] } }
      ]
    }
  }, [latitude, longitude])

  const layerStyle = useMemo(() => {
    return {
      id: 'point',
      type: 'circle',
      paint: {
        'circle-radius': 10,
        'circle-color': '#007cbf'
      }
    }
  }, [])

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          if(latitude) {
            setLatitude(latitude)
          }
          if(longitude) {
            setLongitude(longitude)
          }
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error(`Error getting geolocation: ${error.message}`);
        }
      );
    }
  }, [])

  return (
    <div className='mt-15'>
      <Map
        mapLib={import('mapbox-gl')}
        initialViewState={{
          longitude: latitude,
          latitude: longitude,
          zoom: 3.5
        }}
        style={{width: '100%', height: 900}}
        mapStyle="mapbox://styles/mapbox/streets-v9">
      </Map>
    </div>
  );
}

export default MapBox
