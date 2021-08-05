import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEOComponent from '../components/SEOcomponent';

const ErrorSection = styled.section`
  min-height: 100vh;
  text-align: center;
  h1 {
    font-size: 9rem;
  }
`;

const Error = () => (
  <Layout>
    <SEOComponent title="Error" />
    <ErrorSection>
      <h1>404</h1>
      <h3>Page not found</h3>
    </ErrorSection>
  </Layout>
);

export default Error;
