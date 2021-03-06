import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }

  /* Site Specific Globals */
  @import url('https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900');
  body {
    background: white;
    color: white;
    line-height: 1;
    font-variant-ligatures: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: 'Raleway', sans-serif;
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  a {
    text-decoration: none;
    color: #121212;
  }

  /* NProgress stles */
  .nprogress-busy {
    cursor: wait;
  }

  #nprogress .peg {
    display: none !important;
  }

  #nprogress .bar {
    height: 4px !important;
  }

  /* React Headroom */
  .headroom {
  background-color: #fff;
  height: 65px;
  left: 0;
  margin: auto;
  max-width: none;
  padding: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateY(0%);
  transition: transform 0.25s ease-in, max-width 0.25s ease-in;
  z-index: 5;
  }

  .headroom--unfixed {
    position: fixed;
    transform: translateY(0%);
    transition: none;
  }

  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }

    .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }

/* Web Accessibility Stuff */
  
@keyframes vert_line {
    0% {
      transform-origin: top left;
      transform: scale(1, 0);
      animation-timing-function: cubic-bezier(0.48, 0.02, 0, 0.99); 
    }
    30% {
      transform-origin: top left;
      transform: scale(1, 1); 
    }
    41% {
      transform-origin: bottom left;
      transform: scale(1, 1);
      animation-timing-function: cubic-bezier(0.48, 0.02, 0, 0.99); 
    }
    100% {
      transform-origin: bottom left;
      transform: scale(1, 0); 
    } 
}

/* Web Accessibility Stuff */

  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus,
  body:not(.user-is-tabbing) a:focus  {
    outline: none;
  }

  button,
  input,
  textarea,
  select {
    color: #121212;
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:invalid {
      box-shadow: none;
    }
    &:focus {
      outline: 3px solid #497ecb;
    }
  }
  a:focus {
    outline: 3px solid #497ecb;
  }
`
export default GlobalStyle
