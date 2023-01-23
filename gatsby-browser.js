import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { PrismicProvider } from '@prismicio/react'

import { repositoryConfigs } from './src/utils/prismicPreviews'
import { linkResolver } from './src/utils/linkResolver'

import './src/stylesheets/main.scss'

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    linkResolver={linkResolver}
    internalLinkComponent={({ href, ...props }) => (
      <Link to={href} {...props} />
    )}
    externalLinkComponent={({ href, ...props }) => {
        console.log(href, props)
        return (
            <Link to={href} {...props} />
        );
    }}
  >
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
)
