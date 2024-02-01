import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/layout';
import Home from '../pages/home/home';
import Mountain from '../pages/mountain/mountain';
import UploadPost from '../pages/uploadPost/uploadPost';
import AddMountain from '../pages/admin/addMountain';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/mountain/:id'
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
