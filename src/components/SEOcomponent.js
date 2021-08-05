import React from 'react';
import SEO from 'react-seo-component';

import { useSiteMetadata } from '../hooks/useSiteMetadata';

const SEOComponent = () => {
  const {
    title,
    description,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <SEO
      title={title}
      description={description || 'Super cool blog'}
      image={`${siteUrl}${image}`}
      pathname={siteUrl}
      siteLanguage={siteLanguage}
      siteLocale={siteLocale}
      twitterUsername={twitterUsername}
    />
  );
};

export default SEOComponent;
