import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const BlogLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
    </>
  );
};

export default BlogLayout;