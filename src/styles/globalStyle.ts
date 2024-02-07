import { createGlobalStyle } from 'styled-components';
import PretendardBold from '../fonts/Pretendard-Bold.woff';
import PretendardMedium from '../fonts/Pretendard-Medium.woff';
import PretendardLight from '../fonts/Pretendard-Light.woff';

export const GlobalStyle = createGlobalStyle`
body {
    overflow-y: hidden;
    overflow-x: hidden;
    font-family: "PretendardLight", sans-serif;
}

@font-face {
    font-family: 'PretendardBold';
    font-style: normal;
    src: url(${PretendardBold}) format('woff');
}

@font-face {
    font-family: 'PretendardMedium';
    font-style: normal;
    src: url(${PretendardMedium}) format('woff');
}

@font-face {
    font-family: 'PretendardLight';
    font-style: normal;
    src: url(${PretendardLight}) format('woff')s;
}
`;
