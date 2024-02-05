import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MountainCard from '../home/mountainCard';
import axios from 'axios';
import { origin_URL } from '../../App';

const SearchMountainContainer = styled.div`
  width: 92%;
  margin: 2% 4%;
`;
const SearchTitle = styled.div`
  font-weight: 600;
`;

const SearchInput = styled.input`
  all: unset;
  padding: 0 3%;
  width: 94%;
  height: 2.7em;
  background-color: #eae9e9;
  border-radius: 10px;
  margin: 2% 0;
  font-size: 0.9em;
`;

interface mountainDataType {
  _id: string;
  mountainId: number;
  mountainName: string;
  mountainLevel: string;
  mountainAddress: string;
  mountainImgURL: string;
  mountainLikes: number;
}

const SearchMountain = () => {
  // const [searchKeyWord, setSearchKeyWord] = useState('');
  const [mountainData, setMountainData] = useState<mountainDataType[]>([]);
  const [selectedMountain, setSelectedMountain] = useState<mountainDataType>();

  const getSearchedMountain = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const response = await axios.get(
        `${origin_URL}/search/${e.target.value}`
      );
      console.log(e.target.value);
      // setSearchKeyWord(e.target.value);
      setTimeout(() => {
        setMountainData(response.data);
      }, 200);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching mountain data:', error);
    }
  };

  // const handleSelectMountain = (e: React.MouseEvent<HTMLInputElement>) => {
  //   const filteredData = mountainData.filter(
  //     (mountain) => mountain.mountainName === e.target.value
  //   );
  //   const filteredMountain = filteredData[0];
  //   setSelectedMountain(filteredMountain);
  // };

  return (
    <SearchMountainContainer>
      <SearchTitle>산 선택하기</SearchTitle>

      <SearchInput
        type='text'
        id='search_input'
        placeholder='🔎 산 이름을 검색해주세요.'
        onChange={getSearchedMountain}
      ></SearchInput>

      {mountainData?.map((c) => (
        <div key={c._id}>
          <MountainCard mountain={c} />
        </div>
      ))}
    </SearchMountainContainer>
  );
};

export default SearchMountain;
