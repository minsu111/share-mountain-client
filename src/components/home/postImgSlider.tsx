import React, { useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import styled from 'styled-components';

const PostImgContainer = styled.div`
  width: 100%;
`;

interface PostingImgType {
  postImg: string[];
}

const PostImgSlider = ({ postImg }: PostingImgType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log('currentIndex', currentIndex);

  const renderSlides = postImg.map((image: string, i) => (
    <div key={image[i]}>
      <img
        src={image}
        alt='image'
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
        selectedItem={postImg[currentIndex]}
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
