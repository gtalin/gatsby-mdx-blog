import styled from 'styled-components';
import { Link } from 'gatsby';

export const H1 = styled.h1`
  color: var(--textColor);
  font-size: 3rem;
`;

export const H2 = styled.h2`
  color: var(--textColor);
  font-size: 2rem;
`;

export const P = styled.p`
  color: ${props => (props.darker ? `var(--grey-800)` : `var(--white)`)};
`;

export const StyledLink = styled(Link)`
  /* color: var(--white); */
  color: var(--textColor);
  /* color: var(--primary-500); */
  font-weight: var(--font-w-6);
  transition: var(--transition);
  display: inline-block;
  letter-spacing: 1px;
  &:hover {
    /* color: var(--primary-300); */
    color: var(--primary-500);
    H2 {
      transition: var(--transition);
      color: var(--primary-500);
    }
    span {
      display: inline-block;
      color: var(--primary-500);
      transform: translateX(5px) scaleX(1.2);
      transition: var(--transition);
    }
  }
`;
