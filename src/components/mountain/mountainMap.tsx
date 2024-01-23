import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
`;

const NaverMap = () => {
  useEffect(() => {
    let map = null;
    let marker = null;
    const initMap = () => {
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.34793359474108, 127.03450729483924),
        zoom: 13,
      });

      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.34793359474108, 127.03450729483924),
        map: map,
        icon: {
          content: `
            <img alt="marker" src="/assets/images/location-marker.svg" />
          `,
        },
      });
    };
    initMap();
  }, []);

  const mapStyle = {
    width: '100%',
    height: '250px',
  };

  return (
    <MapContainer>
      <div
        id='map'
        style={mapStyle}
      />
    </MapContainer>
  );
};

export default NaverMap;
