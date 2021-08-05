import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';
// import Dump from '../components/Dump';
import Layout from '../components/Layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

// import { H1, P } from '../components/styledComponents/Typography';
import ArticleNav from '../components/ArticleNav';
import {
  H1,
  P,
  Article,
  ArticleHeader,
} from '../components/styledComponents/mdxComponents';

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();
  const { frontmatter, body, fields, excerpt } = data.mdx;
  const { title, date, cover } = frontmatter;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <Article>
        <ArticleHeader>
          <H1>{frontmatter.title}</H1>
          <P darker>{frontmatter.date}</P>
        </ArticleHeader>

        <MDXRenderer>{body}</MDXRenderer>
        <ArticleNav previous={previous} next={next} />
      </Article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
