import React from 'react';
import { graphql, Link } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
// import Dump from '../components/Code';

const IndexWrapper = styled.main``;
const PostWrapper = styled.div``;
// const Image = styled(GatsbyImage)`
//   border-radius: 5px;
// `;

const Home = ({ data }) => (
  <>
    <Layout>
      <IndexWrapper>
        {/* <Dump data={data} /> */}
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <h2>{frontmatter.title}</h2>
            </Link>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </PostWrapper>
        ))}
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
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default Home;
