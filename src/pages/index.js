import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import Layout from '../components/Layout';
import Dump from '../components/Dump';

const IndexWrapper = styled.main``;
const PostWrapper = styled.div``;
const Image = styled(GatsbyImage)`
  border-radius: 5px;
`;

const Home = ({ data }) => (
  <>
    <Layout>
      <IndexWrapper>
        <Dump data={data} />
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
          const image = getImage(frontmatter.cover);
          return (
            <PostWrapper key={id}>
              <Link to={fields.slug}>
                <h2>{frontmatter.title}</h2>
              </Link>
              {frontmatter.cover ? (
                <Image image={image} alt="cover image" />
              ) : null}

              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </PostWrapper>
          );
        })}
      </IndexWrapper>
    </Layout>
  </>
);

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default Home;
