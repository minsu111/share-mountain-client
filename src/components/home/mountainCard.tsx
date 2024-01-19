import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div``;

const Card = styled.div``;

const CardContentsWrapper = styled.div``;

interface MountainType {
  mountain: string;
}

const MountainCard = ({ mountain }: MountainType) => {
  return (
    <CardContainer>
      <Card>
        <CardContentsWrapper></CardContentsWrapper>
        {mountain}
      </Card>
    </CardContainer>
  );
};

export default MountainCard;
