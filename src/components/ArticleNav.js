import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { ArticleFooter, ArticleLink } from './styledComponents/mdxComponents';

const StyledIcon = styled(FaHome)`
  color: var(--white);
  font-size: 1.5rem;
`;
// The styled link of
// const StyledLink = styled(Link)`
//   font-weight: bold;
//   transition: var(--transition);
//   display: block;

//   span {
//     transition: var(--transition);
//   }
//   &:hover {
//     /* transform: scaleX(1.1);
//     transform-origin: revert; */
//     ${props =>
//       props.right
//         ? `transform: translateX(5px)`
//         : `transform: translateX(-5px)`};
//     span {
//       display: inline-block;
//       /* color: var(--primary-500);
//       transform: translateX(5px) scaleX(1.2); */

//       ${props =>
//         props.right
//           ? `transform: scaleX(1.2) translateX(8px)`
//           : `transform: scaleX(1.2) translateX(-8px)`};
//     }
//   }
// `;

const ArticleNav = ({ previous, next }) => {
  const prevLink =
    previous === false ? null : (
      <>
        {previous && (
          <ArticleLink to={previous.fields.slug}>
            <p>
              {' '}
              <span>&#8592;</span> {previous.frontmatter.title}
            </p>
          </ArticleLink>
        )}
      </>
    );

  const nextLink =
    next === false ? null : (
      <>
        {next && (
          <ArticleLink to={next.fields.slug} right>
            <p>
              {next.frontmatter.title} <span>&#8594;</span>
            </p>
          </ArticleLink>
        )}
      </>
    );
  return (
    <ArticleFooter>
      {prevLink}
      <Link to="/">
        <StyledIcon />
      </Link>
      {nextLink}
    </ArticleFooter>
  );
};

export default ArticleNav;
