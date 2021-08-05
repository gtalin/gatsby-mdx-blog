import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import Footer from './Footer';
import Main from './styledComponents/Main';
import GlobalStyles from './GlobalStyles';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyles />
      <Header siteTitle={title} siteDescription={description} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
