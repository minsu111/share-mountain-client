import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MountainBtnContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MountainBtnContent = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8%;

  cursor: pointer;
`;

const MountainBtnImg = styled.div`
  width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border-top: 0.1vw solid #e1e1e1;
    box-shadow: 1px 1px 1px #b2b2b2;
  }
`;

const MountainName = styled.div`
  width: 55px;
  font-size: 0.7em;
  text-align: center;
  color: #474747;
`;

interface MountainInfoType {
  mountainInfo: {
    _id: string;
    mountainName: string;
    mountainImgURL: string;
  };
}

const MountainBtn = ({ mountainInfo }: MountainInfoType) => {
  const navigate = useNavigate();
  const handleMountainBtn = () => {
    navigate(`/mountain/${mountainInfo._id}`);
  };

  return (
    <MountainBtnContainer onClick={handleMountainBtn}>
      <MountainBtnContent>
        <MountainBtnImg>
          <img
            src={mountainInfo.mountainImgURL}
            alt={mountainInfo.mountainName}
          />
        </MountainBtnImg>
        <MountainName>{mountainInfo.mountainName}</MountainName>
      </MountainBtnContent>
    </MountainBtnContainer>
  );
};

export default MountainBtn;
