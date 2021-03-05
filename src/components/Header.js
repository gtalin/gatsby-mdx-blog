import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: rebeccapurple;
  font-size: 2rem;
`;

export const Header = ({ siteTitle, siteDescription }) => (
  <Link to="/">
    <StyledH1>{siteTitle}</StyledH1>
    <p>{siteDescription}</p>
  </Link>
);
