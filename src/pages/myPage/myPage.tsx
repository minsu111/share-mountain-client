import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { origin_URL } from '../../App';
import { redirect, useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/utils';

const MyPage = () => {
  const [userInfo, setUserInfo] = useState('');

  const navigate = useNavigate();
  const userToken = getCookie('token');

  useEffect(() => {
    if (!userToken) navigate('/login');
  }, [userToken]);

  return userToken ? <div>토큰있음</div> : <div>토큰 없음</div>;
};

export default MyPage;
