import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/layout';
import Home from '../pages/home/home';
import Mountain from '../pages/mountain/mountain';

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
