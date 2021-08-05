import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { H1, StyledLink } from './styledComponents/Typography';

const StyledHeader = styled.header`
  background: var(--black);
  padding: 1rem;
  margin-bottom: var(--spacing-xl);
  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const Header = ({ siteTitle, siteDescription }) => (
  <StyledHeader>
    <HeaderContent>
      <StyledLink to="/">
        <H1>{siteTitle}</H1>
      </StyledLink>
      <StyledLink to="/inspiration">inspiration</StyledLink>
    </HeaderContent>
  </StyledHeader>
);
