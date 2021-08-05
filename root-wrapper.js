import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from './src/components/Code';

import {
  H1,
  H2,
  H3,
  StyledLink,
  P,
  UL,
  OL,
  Blockquote,
} from './src/components/styledComponents/mdxComponents';

const components = {
  // h2: ({ children }) => <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>,
  h1: H1,
  h2: H2,
  h3: H3,
  a: StyledLink,
  p: P,
  ul: UL,
  ol: OL,
  blockquote: Blockquote,
  'p.inlineCode': props => (
    <code
      style={{
        backgroundColor: 'lightgray',
        color: '#222',
        borderRadius: '5px',
        paddingLeft: '.5rem',
        paddingRight: '.5rem',
      }}
      {...props}
    />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
