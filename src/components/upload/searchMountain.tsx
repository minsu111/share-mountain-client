import React, { useState } from 'react';
import styled from 'styled-components';
import MountainCard from '../home/mountainCard';
import axios from 'axios';
import { origin_URL } from '../../App';

const SearchMountainContainer = styled.div`
  width: 92%;
  margin: 2% 4%;
`;
const SearchTitle = styled.label`
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

const SelectMTLabel = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const SelectMTInput = styled.input`
  display: none;
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

interface SearchMountainProps {
  onSelectMountain: (mountainNameInfo: string) => void;
  id: string;
  name: string;
}

const SearchMountain = ({
  onSelectMountain,
  id,
  name,
}: SearchMountainProps) => {
  // const [searchKeyWord, setSearchKeyWord] = useState('');
  const [mountainData, setMountainData] = useState<mountainDataType[]>([]);
  const [selectedMountain, setSelectedMountain] = useState<mountainDataType>();

  const getSearchedMountain = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value.length > 1)
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

  const handleSelectMountain = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = mountainData.filter(
      (mountain) => mountain.mountainName === e.target.value
    );
    const filteredMountain = filteredData[0];
    if (filteredMountain) {
      setSelectedMountain(filteredMountain);
      onSelectMountain(filteredMountain.mountainName);
    }
  };

  return (
    <SearchMountainContainer>
      <SearchTitle htmlFor='search_input'>산 선택하기</SearchTitle>
      {selectedMountain ? (
        <MountainCard mountain={selectedMountain} />
      ) : (
        <>
          <SearchInput
            type='text'
            id='search_input'
            placeholder='🔎 산 이름을 검색해주세요.'
            onChange={getSearchedMountain}
          ></SearchInput>
          {mountainData?.map((c) => (
            <div key={c._id}>
              <SelectMTLabel htmlFor='select_mountain'>
                <SelectMTInput
                  type='radio'
                  id={id}
                  name={name}
                  value={c.mountainName}
                  onChange={handleSelectMountain}
                ></SelectMTInput>
                <MountainCard mountain={c} />
              </SelectMTLabel>
            </div>
          ))}
        </>
      )}
    </SearchMountainContainer>
  );
};

export default SearchMountain;
