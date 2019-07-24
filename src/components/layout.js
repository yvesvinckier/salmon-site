/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'

class Layout extends React.Component {
  render() {
    const children = this.props.children
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet>
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>

          <section role="main">{children}</section>
          <GlobalStyle />
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
