import styled from 'styled-components';
import { Link } from 'gatsby';

// This is what MDX articles are rendred inside.
export const Article = styled.article`
  max-width: 675px;
  margin: 0 auto;
`;

export const ArticleHeader = styled.header`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  h1 {
    font-size: 5rem;
    margin-bottom: var(--spacing-xs);
    color: var(--textColor);
    text-transform: capitalize;
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 20vw;
      height: 2px;
      background: var(--primary-500);
      background: var(--rainbow-linear-gradient-LtoR);
    }
    &::before {
      bottom: 0;
      left: 0;
    }
    &::after {
      bottom: 0;
      right: 0;
    }
  }
`;

export const ArticleFooter = styled.footer`
  text-align: center;
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArticleLink = styled(Link)`
  font-weight: bold;
  transition: var(--transition);
  display: block;

  span {
    transition: var(--transition);
  }
  &:hover {
    /* transform: scaleX(1.1);
    transform-origin: revert; */
    ${props =>
      props.right
        ? `transform: translateX(5px)`
        : `transform: translateX(-5px)`};
    span {
      display: inline-block;
      /* color: var(--primary-500);
      transform: translateX(5px) scaleX(1.2); */

      ${props =>
        props.right
          ? `transform: scaleX(1.2) translateX(8px)`
          : `transform: scaleX(1.2) translateX(-8px)`};
    }
  }
`;
