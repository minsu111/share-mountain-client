import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Layout from '../components/layout/layout';
import Home from '../pages/home/home';
import Mountain from '../pages/mountain/mountain';
import UploadPost from '../pages/uploadPost/uploadPost';
import AddMountain from '../pages/admin/addMountain';
import Login from '../pages/auth/login';
import SignUp from '../pages/auth/signUp';
import MyPage from '../pages/myPage/myPage';
import Test from '../pages/test';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<Navigate to='/home' />}
          />

          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/mountain/:mountainName'
            element={<Mountain />}
          />
          <Route
            path='/upload/post'
            element={<UploadPost />}
          />
          <Route
            path='/upload/mountain'
            element={<AddMountain />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/signUp'
            element={<SignUp />}
          />
          <Route
            path='/myPage'
            element={<MyPage />}
          />
          <Route
            path='/test'
            element={<Test />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout children={undefined} />,
//     // errorElement: <NotFound />,
//     children: [{ index: true, path: '/home', element: <Home /> }],
//   },
// ]);

// export default router;
