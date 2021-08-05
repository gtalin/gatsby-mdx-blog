import React from 'react';
import SEO from 'react-seo-component';

import { useSiteMetadata } from '../hooks/useSiteMetadata';

const SEOComponent = ({ title }) => {
  const {
    siteName,
    description,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();
  console.log('Title is', title);
  console.log('Site Name is', siteName);
  return (
    <SEO
      title={`${title}`}
      titleTemplate={siteName}
      titleSeparator="-"
      description={description || 'Super cool blog'}
      image={`${siteUrl}${image}`}
      pathname={siteUrl}
      siteLanguage={siteLanguage}
      siteLocale={siteLocale}
      twitterUsername={twitterUsername}
      author={authorName}
      article
    />
  );
};

export default SEOComponent;
