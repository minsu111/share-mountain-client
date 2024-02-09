import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { origin_URL } from '../../App';
import { redirect } from 'react-router-dom';

const MyPage = () => {
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(`${origin_URL}/user`);
        !response ? redirect('/login') : setUserInfo(response.data.userName);
      } catch (e) {
        console.log(e);
      }
    };
    getUserData();
  }, []);

  return <div>{userInfo}</div>;
};

export default MyPage;
