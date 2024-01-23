import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
`;

const MountainAddressWrapper = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    margin: 0 2%;
  }

  span {
    padding-top: 1%;
    color: #667080;
    font-size: 0.9em;
  }
`;

interface mountainAddressType {
  mountainAddress?: string;
}
const NaverMap = ({ mountainAddress }: mountainAddressType) => {
  const [{ lat, lng }, setGeometricData] = useState({
    lat: 0,
    lng: 0,
  });

  const searchAddressToCoordinate = (address: string) => {
    if (mountainAddress)
      naver.maps.Service.geocode(
        {
          query: mountainAddress,
        },
        function (status, response) {
          if (status === naver.maps.Service.Status.ERROR) {
            if (!address) {
              return alert('Geocode Error, Please check address');
            }
            return alert('Geocode Error, address:' + address);
          }

          if (response.v2.meta.totalCount === 0) {
            return alert('No result.');
          }

          const item = response.v2.addresses[0];
          console.log(item, item.x);
          setGeometricData({
            lng: parseFloat(item.x),
            lat: parseFloat(item.y),
          });
          console.log(lng, lat);
        }
      );
  };

  useEffect(() => {
    const initMap = () => {
      // let map = null;
      // const marker = null;

      new naver.maps.Map('map', {
        center: new naver.maps.LatLng(lat, lng),
        zoom: 12,
        scrollWheel: false,
      });

      // marker = new naver.maps.Marker({
      //   position: new naver.maps.LatLng(lat, lng),
      //   map: map,
      //   icon: {
      //     content: `
      //       <img alt="marker" src="/assets/images/location-marker.svg"/>
      //     `,
      //   },
      // });
    };
    initMap();
    if (mountainAddress) searchAddressToCoordinate(mountainAddress);
  }, [lat, lng]);

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
      <MountainAddressWrapper>
        <img
          src='/assets/images/location-marker.svg'
          alt='주소:'
        />
        <span>{mountainAddress}</span>
      </MountainAddressWrapper>
    </MapContainer>
  );
};

export default NaverMap;
