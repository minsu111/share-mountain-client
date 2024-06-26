import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { origin_URL } from '../../App';
import Button from '../../components/common/button';
import TextArea from '../../components/upload/textArea';
import SearchMountain from '../../components/upload/searchMountain';
import { useUserStore } from '@/store/useUserStore';
import { uploadPostFetch } from '@/api/post/uploadPostFetch';
import { usePostStore } from '@/store/usePostStore';
import { useNavigate } from 'react-router-dom';

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
  const [files, setFiles] = useState<File[]>([]);
  const navigate = useNavigate();

  const handleSelectMountain = (mountainNameInfo: string) => {
    setSelectedMountain(mountainNameInfo);
  };

  const { setPostBody } = usePostStore();

  const postBody = usePostStore((state) => state.postBody || '');
  const userNickName = useUserStore((state) => state.user?.nickName) || '';

  //  여러 장의 이미지 업로드
  const uploadFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('postBody', postBody);

    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
    }

    // 실제 업로드 함수 호출 부분

    try {
      await uploadPostFetch(formData, selectedMountain, userNickName);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }

    //formData key, value 확인
    // for (const [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileArr = e.target.files;

    if (fileArr) {
      const fileReaders: FileReader[] = [];
      const previews: (string | ArrayBuffer | null)[] = [];
      const newFiles = Array.from(fileArr);

      newFiles.forEach((file, i) => {
        const fileReader = new FileReader();

        fileReader.onload = function () {
          previews[i] = fileReader.result;

          if ([...previews].length > 5) {
            alert('이미지는 최대 5개까지 업로드할 수 있어요.');
          } else {
            setPreviewImg([...previews]);
            setFiles([...files, ...newFiles]);
          }
        };

        fileReader.readAsDataURL(file);
        fileReaders.push(fileReader);
      });
    }
  };

  const removeImg = (index: number) => {
    const removePreviewImg = [...previewImg];
    const updatedFiles = [...files];

    removePreviewImg.splice(index, 1);
    updatedFiles.splice(index, 1);

    setPreviewImg(removePreviewImg);
    setFiles(updatedFiles);
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostBody(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={uploadFile}
        // action={`${origin_URL}/post/add/${selectedMountain}/${userNickName}`}
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
            onChange={handleFileChange}
            multiple
            disabled={previewImg.length === 5}
          />
        </div>
        <TextArea
          id='post_text'
          name='post_text'
          placeholder='본문을 입력해주세요.'
          onchange={handleTextArea}
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
