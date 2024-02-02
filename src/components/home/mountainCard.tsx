import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div<{ path: string }>`
  width: 92%;
  height: 85%;

  border-radius: 0.5em;
  border: 1px solid #e1e1e1;

  cursor: ${(props) => (props.path === '/upload/post' ? 'default' : 'pointer')};
`;

const CardContentsWrapper = styled.div`
  width: 98%;
  height: 98%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardImgWrapper = styled.div`
  width: 22%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImg = styled.img`
  width: 68%;
  height: 75%;
  border-radius: 0.5em;
`;

const CardTextWrapper = styled.div`
  font-size: 0.6em;
  display: flex;
  flex-direction: column;
  row-gap: 0.4em;
`;

const MountainName = styled.div`
  font-weight: 700;
`;

const MountainAddress = styled.div`
  color: #8b8b8b;
`;

const MountainLevel = styled.div``;

interface MountainType {
  mountain:
    | {
        _id: string;
        mountainName: string;
        mountainAddress: string;
        mountainLevel: string;
        mountainImgURL: string;
      }
    | undefined;
}

const MountainCard = ({ mountain }: MountainType) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleMountainCardBtn = () => {
    location.pathname !== '/upload/post' &&
      navigate(`/mountain/${mountain?._id}`);
  };
  const mountainLevel = Number(mountain?.mountainLevel).toLocaleString();

  return (
    <>
      {mountain === undefined ? null : (
        <CardContainer onClick={handleMountainCardBtn}>
          <Card path={location.pathname}>
            <CardContentsWrapper>
              <CardImgWrapper>
                <CardImg src={mountain.mountainImgURL} />
              </CardImgWrapper>
              <CardTextWrapper>
                <MountainName>{mountain.mountainName}</MountainName>
                <MountainAddress>{mountain.mountainAddress}</MountainAddress>
                <MountainLevel>{mountainLevel}m</MountainLevel>
              </CardTextWrapper>
            </CardContentsWrapper>
          </Card>
        </CardContainer>
      )}
    </>
  );
};

export default MountainCard;
