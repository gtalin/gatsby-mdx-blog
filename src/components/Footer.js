import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledFooter = styled.footer`
  background: var(--black);
  color: var(--white);
  padding: 1rem;
  text-align: center;
  letter-spacing: 1px;

  span,
  a {
    color: var(--primary-500);
  }
`;

const FooterContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      <p>
        &copy; {new Date().getFullYear()} <span />
        <Link to="/">Aruj&apos;s Blog. </Link>
        Built with{' '}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </p>
    </FooterContent>
  </StyledFooter>
);

export default Footer;
