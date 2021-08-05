import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SEO from 'react-seo-component';

import Layout from '../components/Layout';
import Posts from '../components/Posts';
import SEOcomponent from '../components/SEOcomponent';

// import { useSiteMetadata } from '../hooks/useSiteMetadata';

// import { H2, P } from '../components/styledComponents/Typography';
// import { H2, P } from '../components/styledComponents/Typography';

// const Posts = styled.section`
//   margin-bottom: var(--spacing-lg);
//   display: grid;
//   grid-template-columns: 1fr;

// `;

// const Post = styled.div`
//   margin-bottom: var(--spacing-lg);
// `;
// const Image = styled(GatsbyImage)`
//   border-radius: 5px;
// `;

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
      <SEOcomponent />
      <Posts data={data.allMdx.nodes} />
      {/* <Posts>
          {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
            const image = getImage(frontmatter.cover);
            return (
              <Post key={id}>
                <Link to={fields.slug}>
                  <H2>{frontmatter.title}</H2>
                </Link>
                {frontmatter.cover ? (
                  <Image image={image} alt="cover image" />
                ) : null}

                <P darker>{frontmatter.date}</P>
                <P>{excerpt}</P>
              </Post>
            );
          })}
        </Posts> */}
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
