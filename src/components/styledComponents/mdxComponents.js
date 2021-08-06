import styled from 'styled-components';

// These will mainly be used by `root-wrapper.js` file
export const H1 = styled.h1`
  color: var(--primary-500);
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
  text-transform: capitalize;
`;

export const H2 = styled.h2`
  color: var(--primary-500);
  font-size: 3rem;
  font-weight: var(--font-w-4);
  margin-bottom: var(--spacing-md);
  text-transform: capitalize;
`;

export const H3 = styled.h3`
  color: var(--primary-500);
  font-size: 2rem;
  font-weight: var(--font-w-4);
  margin-bottom: var(--spacing-md);
  text-transform: capitalize;
`;

export const P = styled.p`
  /* color: ${props => (props.darker ? `var(--grey-800)` : `var(--white)`)}; */
  color: ${props => (props.darker ? `var(--grey-800)` : `var(--textColor);`)};
  font-size: var(--articleFontSize);
  font-weight: var(--font-w-4);
`;

export const StyledLink = styled.a`
  /* color: var(--white); */
  /* color: var(--textColor); */
  display: inline-block;
  color: var(--primary-500);
  font-weight: var(--font-w-6);
  transition: var(--transition);
  letter-spacing: 1px;
  box-shadow: 0px 0px 0px var(--primary-500);
  transition: var(--transition);
  text-transform: none;
  &:hover {
    /* color: var(--primary-300); */
    /* color: var(--primary-500); */
    box-shadow: 0px 2px 0px var(--primary-500);
    /* H2 {
      transition: var(--transition);
      color: var(--primary-500);
    } */
    span {
      display: inline-block;
      color: var(--primary-500);
      transform: translateX(5px) scaleX(1.2);
      transition: var(--transition);
    }
  }
`;

// export const UL = styled.ul`
//   font-size: var(--articleFontSize);
//   padding-left: 1.5rem;
//   li {
//     padding-bottom: 1rem;
//     position: relative;
//   }
//   li:before {
//     content: '';
//     color: var(--primary-500);
//     position: absolute;

//     border-right: 2px solid var(--primary-500);
//     border-bottom: 2px solid var(--primary-500);
//     width: 10px;
//     height: 10px;
//     top: calc(50% - 6px);
//     left: -20px;
//     transform: translateY(-50%) rotate(-45deg);
//   }
// `;

// Another way of adding an arrow thing instead of list bullet, could be as follows:
export const UL = styled.ul`
  font-size: var(--articleFontSize);
  padding-left: 1.8rem;
  li {
    padding-bottom: 1rem;
    position: relative;
  }
  li:before {
    content: '→';
    color: var(--primary-500);
    font-weight: var(--font-w-7);
    font-size: var(--articleFontSize);
    position: absolute;
    left: -1.8rem;
  }
`;

// Old solution to get number of different color for ordered list. Newer would be using marker
export const OL = styled.ol`
  font-size: var(--articleFontSize);
  list-style-type: none;
  counter-reset: item;
  /* padding-left: 1.8rem; */
  li {
    padding-bottom: 1rem;
    position: relative;
  }
  li:before {
    content: counter(item) '. ';
    counter-increment: item;
    color: var(--primary-500);
    font-weight: var(--font-w-7);
    display: inline-block;
    border-radius: 50%;
    padding-right: 8px;
    /* font-weight: bold; */
  }
`;

export const Blockquote = styled.blockquote`
  /* border-left: 2px solid var(--primary-500); */
  padding-left: var(--spacing-sm);
  position: relative;
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);

  /* border: 5px solid gold; */
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    left: 0;
    background: var(--primary-500);
    background: linear-gradient(
      #d367c1 10%,
      #dedf40 25%,
      #62cb5c 50%,
      #00bbcb 75%,
      #ab79d6 90%
    );
    border-radius: var(--borderRadius);
  }
`;
