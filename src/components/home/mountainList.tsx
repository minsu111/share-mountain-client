import React, { useEffect, useState } from 'react';
import MountainBtn from './mountainBtn';
import styled from 'styled-components';
import { origin_URL } from '../../App';
import axios from 'axios';

const MountainListContainer = styled.div`
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

interface mountainDataType {
  mountainId: number;
  mountainName: string;
  mountainLevel: string;
  mountainAddress: string;
  mountainLikes: number;
}

const MountainList = () => {
  const [mountainData, setMountainData] = useState<mountainDataType>();

  useEffect(() => {
    const getMountainData = async () => {
      try {
        const response = await axios.get(`${origin_URL}/mountain`);
        console.log(response.data);
        setMountainData(response.data);
      } catch (error) {
        console.error('Error fetching mountain data:', error);
      }
    };
    getMountainData();
  }, []);

  return (
    <MountainListContainer>
      {mountainData?.map(
        (c: {
          mountainId: number;
          mountainName?: string;
          mountainImgURL?: string;
        }) => (
          <MountainBtn
            mountainInfo={c}
            key={c.mountainId}
          />
        )
      )}
    </MountainListContainer>
  );
};

export default MountainList;
