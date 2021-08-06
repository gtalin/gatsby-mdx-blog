import React from 'react';
import Layout from '../components/Layout';
import SEOComponent from '../components/SEOcomponent';
import { H1, P } from '../components/styledComponents/mdxComponents';
import { Article } from '../components/styledComponents/Article';

const Inspiration = () => (
  <Layout>
    <SEOComponent title="Inspiration" />
    <Article>
      <H1>Inspiration for this blog</H1>
      <P>
        These are my notes documenting topics I&apos;ve learned or something new
        I am learning. They also contain my learnings and research I do for some
        project I am doing or some new technology I am learning.
      </P>

      <P>
        I am documenting my learnings and journey insipred by{' '}
        <a
          href="https://www.swyx.io/learn-in-public/"
          target="_blank"
          rel="noreferrer"
        >
          Learn in public
        </a>{' '}
        by Shawn Wang aka{' '}
        <a href="https://twitter.com/swyx" target="_blank" rel="noreferrer">
          @swyx
        </a>{' '}
      </P>
    </Article>
  </Layout>
);
export default Inspiration;
