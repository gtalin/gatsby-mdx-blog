import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';

import Layout from '../components/Layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

import ArticleNav from '../components/ArticleNav';
import { H1, P } from '../components/styledComponents/mdxComponents';
import { Article, ArticleHeader } from '../components/styledComponents/Article';

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    siteName,
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
        titleTemplate={siteName}
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
        published
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
