import React from 'react';

import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { H2, P, StyledLink } from './styledComponents/Typography';
import Card from './styledComponents/Card';
import Article from './styledComponents/Article';

const Image = styled(GatsbyImage)`
  border-radius: 5px;
  height: 200px;
`;

const Post = ({ excerpt, frontmatter, fields, image }) => (
  <Card>
    <Article>
      <StyledLink to={fields.slug}>
        <H2>{frontmatter.title}</H2>
      </StyledLink>
      {frontmatter.cover ? <Image image={image} alt="cover image" /> : null}

      <P darker>{frontmatter.date}</P>
      <P>{excerpt}</P>
      <StyledLink to={fields.slug}>
        Read more <span>&rarr;</span>{' '}
      </StyledLink>
    </Article>
  </Card>
);

export default Post;
