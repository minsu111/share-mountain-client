import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { origin_URL } from '../../App';
import axios from 'axios';
import Button from '../../components/common/buttons';
import TextArea from '../../components/upload/textArea';
import MountainCard from '../../components/home/mountainCard';

const PostInput = styled.input`
  display: none;
`;

const ImgButtonLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  width: 92%;
  line-height: 2.5em;
  height: 2.5em;
  margin: 0 4%;
  border-radius: 0.5em;
  background-color: #667080;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

const PreviewImgContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 4%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3.5%;
`;

const PreviewImgBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 0.5em;
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5em;
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

const UploadPost = () => {
  const [mountainData, setMountainData] = useState<mountainDataType[]>([]);
  const [selectedMountain, setSelectedMountain] = useState<mountainDataType>();
  const [previewImg, setPreviewImg] = useState<(string | ArrayBuffer | null)[]>(
    []
  );

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

  const handleSelectMountain = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = mountainData.filter(
      (mountain) => mountain.mountainName === e.target.value
    );
    const filteredMountain = filteredData[0];
    setSelectedMountain(filteredMountain);
  };

  // function uploadFile(e: React.ChangeEvent<HTMLInputElement>) {
  //   const fileArr = e.target.files;

  //   const fileRead = new FileReader();
  //   fileRead.onload = function () {
  //     setPreviewImg(fileRead.result);
  //     console.log(previewImg);
  //   };

  //   fileArr && fileRead.readAsDataURL(fileArr[0]);
  // }

  function uploadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const fileArr = e.target.files;

    if (fileArr) {
      const fileReaders: FileReader[] = [];
      const previews: (string | ArrayBuffer | null)[] = [];

      Array.from(fileArr).forEach((file, i) => {
        const fileReader = new FileReader();

        fileReader.onload = function () {
          previews[i] = fileReader.result;
          setPreviewImg([...previews]);
        };

        fileReader.readAsDataURL(file);
        fileReaders.push(fileReader);
      });
    }
  }

  return (
    <div>
      <form
        action={`${origin_URL}/addPost`}
        method='POST'
        encType='multipart/form-data'
      >
        {mountainData?.map((c: mountainDataType) => (
          <div key={c._id}>
            <input
              type='radio'
              name='select_mountain'
              id={c.mountainName}
              value={c.mountainName}
              onChange={handleSelectMountain}
            />
            <label htmlFor={c.mountainName}> {c.mountainName}</label>
          </div>
        ))}
        <MountainCard mountain={selectedMountain} />

        <div>
          {previewImg.length > 0 ? (
            <PreviewImgContainer>
              {previewImg.map((img, i) => (
                <PreviewImgBox>
                  <PreviewImg
                    key={i}
                    src={img ? img.toString() : ''}
                    alt={`preview-img-${i}`}
                  />
                </PreviewImgBox>
              ))}
            </PreviewImgContainer>
          ) : (
            ''
          )}
          <ImgButtonLabel htmlFor='img2'>사진 선택하기</ImgButtonLabel>
          <PostInput
            type='file'
            id='img2'
            name='img2'
            accept='image/*'
            onChange={uploadFile}
            multiple
          />
        </div>
        <TextArea
          id='post_text'
          name='post_text'
          placeholder='본문을 입력해주세요.'
        />

        <Button
          type={'submit'}
          btnWidth={'long'}
          btnText={'게시물 올리기'}
        />
      </form>
    </div>
  );
};

export default UploadPost;
