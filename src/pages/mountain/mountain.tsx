import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MountainHeader from '../../components/mountain/mountainHeader';
import NaverMap from '../../components/mountain/mountainMap';
import MountainPost from '../../components/mountain/mountainPost';
import DivideLine from '../../components/common/divide';

import axios from 'axios';
import { origin_URL } from '../../App';

interface mountainDataType {
  mountainName: string;
  mountainLevel: string;
  mountainAddress: string;
  mountainLikes: number;
}

const Mountain = () => {
  const [mountainData, setMountainData] = useState<mountainDataType>();
  const { mountainName } = useParams();

  // const mountainData = MountainData.filter(
  //   (v) => v.mountainInfo.mountainId === Number(id)
  // )[0];

  useEffect(() => {
    const getMountainData = async () => {
      try {
        const response = await axios.get(
          `${origin_URL}/mountain/${mountainName}`
        );
        console.log(response.data);
        setMountainData(response.data);
      } catch (error) {
        console.error('Error fetching mountain data:', error);
      }
    };
    getMountainData();
  }, [mountainName]);

  return (
    <>
      {mountainData && (
        <>
          <MountainHeader mountainInfo={mountainData} />
          <NaverMap mountainAddress={mountainData?.mountainAddress} />
          <DivideLine />
          <MountainPost />
        </>
      )}
    </>
  );
};

export default Mountain;
