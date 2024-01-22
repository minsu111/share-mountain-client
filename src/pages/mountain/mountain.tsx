import React from 'react';
import { useParams } from 'react-router-dom';
import MountainHeader from '../../components/mountain/mountainHeader';
import MountainMap from '../../components/mountain/mountainMap';

import MountainData from '../../data/mountain.json';

const Mountain = () => {
  const { id } = useParams();

  const mountainData = MountainData.filter(
    (v) => v.mountainInfo.mountainId === Number(id)
  )[0];

  return (
    <>
      <MountainHeader mountainInfo={mountainData.mountainInfo} />
      <MountainMap />
    </>
  );
};

export default Mountain;