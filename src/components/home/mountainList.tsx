import React, { useEffect, useState } from 'react';
import MountainBtn from './mountainBtn';
import styled from 'styled-components';
import { origin_URL } from '../../App';
import axios from 'axios';

const MountainListContainer = styled.div`
  width: 94%;
  height: 14vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3%;
  overflow-x: auto;
  padding: 0 3%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

interface mountainDataType {
  _id: string;
  mountainName: string;
  mountainLevel: string;
  mountainAddress: string;
  mountainImgURL: string;
  mountainLikes: number;
}

const MountainList = () => {
  const [mountainData, setMountainData] = useState<mountainDataType[]>();

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
      {mountainData?.map((c: mountainDataType) => (
        <MountainBtn
          mountainInfo={c}
          key={c._id}
        />
      ))}
    </MountainListContainer>
  );
};

export default MountainList;
