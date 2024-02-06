import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { origin_URL } from '../../App';
import Button from '../../components/common/buttons';
import TextArea from '../../components/upload/textArea';
import SearchMountain from '../../components/upload/searchMountain';

const PostInput = styled.input`
  display: none;
`;

const ImgButtonLabel = styled.label<{ previewNum: number }>`
  display: inline-block;
  vertical-align: middle;
  width: 92%;
  line-height: 2.5em;
  height: 2.5em;
  margin: 2% 4%;
  border-radius: 0.5em;
  background-color: ${(props) =>
    props.previewNum === 5 ? 'lightgray' : '#667080'};
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

const PreviewImgContainer = styled.div`
  width: 100%;
  height: 90px;
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
  position: relative;
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5em;
`;

const RemovePreviewBtn = styled.div`
  position: absolute;
  top: -10%;
  left: 75%;
  z-index: 10;
`;

const UploadPost = () => {
  const [selectedMountain, setSelectedMountain] = useState('');
  const [previewImg, setPreviewImg] = useState<(string | ArrayBuffer | null)[]>(
    []
  );

  //  여러 장의 이미지 업로드
  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileArr = e.target.files;

    if (fileArr) {
      const fileReaders: FileReader[] = [];
      const previews: (string | ArrayBuffer | null)[] = [];

      Array.from(fileArr).forEach((file, i) => {
        const fileReader = new FileReader();

        fileReader.onload = function () {
          previews[i] = fileReader.result;

          [...previews].length > 5
            ? alert('이미지는 최대 5개까지 업로드할 수 있어요.')
            : setPreviewImg([...previews]);
        };

        fileReader.readAsDataURL(file);
        fileReaders.push(fileReader);
      });
    }
  };

  const removeImg = (index: number) => {
    const removePreviewImg = [...previewImg];
    removePreviewImg.splice(index, 1);
    setPreviewImg(removePreviewImg);
  };

  const handleSelectMountain = (mountainNameInfo: string) => {
    setSelectedMountain(mountainNameInfo);
  };

  return (
    <div>
      <form
        action={`${origin_URL}/addPost/${selectedMountain}`}
        method='POST'
        encType='multipart/form-data'
      >
        <SearchMountain
          onSelectMountain={handleSelectMountain}
          id='select_mountain'
          name='select_mountain'
        />
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
                  <RemovePreviewBtn onClick={() => removeImg(i)}>
                    <img
                      src='/assets/images/closeBtn.svg'
                      alt='삭제'
                    />
                  </RemovePreviewBtn>
                </PreviewImgBox>
              ))}
            </PreviewImgContainer>
          ) : (
            ''
          )}
          <ImgButtonLabel
            htmlFor='img2'
            previewNum={previewImg.length}
          >
            사진 선택하기
          </ImgButtonLabel>
          <PostInput
            type='file'
            id='img2'
            name='img2'
            accept='image/*'
            onChange={uploadFile}
            multiple
            disabled={previewImg.length === 5}
          />
        </div>
        <TextArea
          id='post_text'
          name='post_text'
          placeholder='본문을 입력해주세요.'
        />
        <div>
          <Button
            type={'submit'}
            btnWidth={'long'}
            btnText={'게시물 올리기'}
          />
        </div>
      </form>
    </div>
  );
};

export default UploadPost;
