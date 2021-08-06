import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import Grid from './styledComponents/Grid';
import Post from './Post';

// const Post = styled.div`
//   margin-bottom: var(--spacing-lg);
// `;
// const Image = styled(GatsbyImage)`
//   border-radius: 5px;
//   height: 200px;
// `;

const Posts = ({ data }) => (
  <Grid>
    {data.map(({ id, excerpt, frontmatter, fields }) => {
      const image = getImage(frontmatter.cover);
      return (
        <Post
          key={id}
          excerpt={excerpt}
          frontmatter={frontmatter}
          fields={fields}
          image={image}
        />
      );
      //   <Post key={id}>
      //     <StyledLink to={fields.slug}>
      //       <H2>{frontmatter.title}</H2>
      //     </StyledLink>
      //     {frontmatter.cover ? <Image image={image} alt="cover image" /> : null}

      //     <P darker>{frontmatter.date}</P>
      //     <P>{excerpt}</P>
      //     <StyledLink to={fields.slug}>
      //       Read more <span>&rarr;</span>{' '}
      //     </StyledLink>
      //   </Post>
      // );
    })}
  </Grid>
);

export default Posts;
