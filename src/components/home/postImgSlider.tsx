import React, { useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import styled from 'styled-components';

const PostImgContainer = styled.div`
  width: 100%;
`;

interface PostingImgType {
  imageId: number;
  imageURL: string;
  alt: string;
}

const PostImgSlider = ({ postingImg }: { postingImg: PostingImgType[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log('currentIndex', currentIndex);

  const renderSlides = postingImg.map((image: PostingImgType) => (
    <div key={image.alt}>
      <img
        src={image.imageURL}
        alt={image.alt}
      />
    </div>
  ));

  const handleChange = (index: number) => {
    setCurrentIndex(index);
    console.log('Changed to index', index);
  };

  return (
    <PostImgContainer>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        selectedItem={postingImg[currentIndex]}
        onChange={handleChange}
        emulateTouch={true}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        {renderSlides}
      </Carousel>
    </PostImgContainer>
  );
};

export default PostImgSlider;
