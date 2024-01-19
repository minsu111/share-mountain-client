import React, { useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import styled from 'styled-components';

interface ImageData {
  label: string;
  alt: string;
  url: string;
}

// test용 이미지 데이터
const imageData: ImageData[] = [
  {
    label: 'Image 1',
    alt: 'image1',
    url: '/assets/images/Image-placeholder.png',
  },

  {
    label: 'Image 2',
    alt: 'image2',
    url: '/assets/images/Image-placeholder.png',
  },

  {
    label: 'Image 3',
    alt: 'image3',
    url: '/assets/images/Image-placeholder.png',
  },

  {
    label: 'Image 4',
    alt: 'image4',
    url: '/assets/images/Image-placeholder.png',
  },

  {
    label: 'Image 5',
    alt: 'image5',
    url: '/assets/images/Image-placeholder.png',
  },
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img
      src={image.url}
      alt={image.alt}
    />
  </div>
));

const PostImgContainer = styled.div`
  width: 100%;
`;

const PostImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleChange(index: number) {
    setCurrentIndex(index);
  }
  return (
    <PostImgContainer>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        emulateTouch={true}
      >
        {renderSlides}
      </Carousel>
    </PostImgContainer>
  );
};

export default PostImgSlider;
