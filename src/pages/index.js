import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Posts from '../components/Posts';
import SEOcomponent from '../components/SEOcomponent';

const Home = ({ data }) => (
  // const {
  //   title,
  //   description,
  //   image,
  //   siteUrl,
  //   siteLanguage,
  //   siteLocale,
  //   twitterUsername,
  // } = useSiteMetadata();
  <>
    <Layout>
      {/* <SEO
          title={title}
          description={description || 'Super cool blog'}
          image={`${siteUrl}${image}`}
          pathname={siteUrl}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          twitterUsername={twitterUsername}
        /> */}
      <SEOcomponent title="Home" />
      <Posts data={data.allMdx.nodes} />
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
          published
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
