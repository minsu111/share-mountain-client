// email 밸리데이션 정규식
export const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

// nickname 벨리데이션 정규식
export const nicknameRegEx = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

// password 밸리데이션 정규식
export const passwordRegEx =
  /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
