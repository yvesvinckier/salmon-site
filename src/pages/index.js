import React, { useEffect, useRef } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

// eslint-disable-next-line no-unused-vars
import DrawSVGPlugin from "../utils/DrawSVGPlugin"
import { TimelineMax, Expo } from "gsap/all";

import styled from 'styled-components'

import Layout from '../components/layout'
import BgImg from '../components/background'
import SEO from '../components/seo'

const IntroHome = styled.div`
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    top: 0;
    position: fixed;
  }

  width: 100%;
  svg {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8em;
    z-index: 2;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      width: 30em;
    }
    .strokeFill {
      fill: none;
      stroke: #fff;
      stroke-width: 13.3037;
      stroke-miterlimit: 10;
    }
    .whiteFill {
      fill: #fff;
    }
  }
  div {
    max-height: 100vh;
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  h1 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 100%;
    line-height: 1.4em;
    text-align: center;
    font-weight: 300;
    font-size: 0.7em;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      top: 65%;
      font-size: 1.4em;
    }
  }
  .home-scroll-invite {
    pointer-events: none;
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    z-index: 2;
    text-align: center;
    opacity: 1;
    transition: opacity 0.3s;
  }

  .home-scroll-invite__label {
    margin-top: 34px;
    display: inline-block;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 1em;
    font-family: 'FuturaStd-Book', sans-serif;
    font-weight: normal;
    font-style: normal;
    letter-spacing: 0.1em;
    letter-spacing: 0.2em;
    font-size: 8px;
    transform: rotate(90deg);
    transform-origin: center center;
    position: relative;
    left: -1px;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 10px;
    }
  }

  .v-line {
    z-index: 20;
    position: relative;
    width: 1px;
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      height: 60px;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      z-index: 20;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 21;
      transform: scale(1, 0) translate3d(0, 0, 0);
      background: #fff;
      animation: vert_line 6s infinite;
    }
  }
`

const PostOuterWrapper = styled.div`
  z-index: 2;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    position: relative;
    &::before {
      content: '';
      display: block;
      z-index: -2;
      width: 0;
      height: 100vh;
      background: transparent;
    }
  }
`

const PostInnerWrapper = styled.div`
  padding-top: 10rem;
  width: 100%;
  background: ${props => props.theme.colors.white};
`

const PostInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: calc(100% - 2em);
  max-width: 1000px;
  padding: 2em;
  margin: 0 1em;
  background: ${props => props.theme.colors.white};
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 7em 2em;
    margin: 0 auto;
    width: calc(100% - 4em);
  }
  .post-info__left {
    margin: 0 0 1em 0;
    width: 100%;
    height: 385px;
    div {
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      margin: 0;
      flex: 0 1 45%;
    }
  }
  .post-info__right {
    width: 100%;
    color: black;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      flex: 0 1 45%;
    }
    svg {
      width: 3em;
      .blackStroke {
        fill: none;
        stroke: #020203;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-miterlimit: 10;
      }
    }

    h3 {
      padding-top: 15px;
      padding-bottom: 15px;
      letter-spacing: 0.10526em;
      text-transform: uppercase;
      font-size: 0.8rem;
      line-height: 1.3rem;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 2rem;
      line-height: 2rem;
    }
    h2 {
      padding-top: 0.2rem;
      padding-bottom: 15px;
      letter-spacing: 0.10526em;
      text-transform: uppercase;
      font-size: 1.6rem;
      font-weight: 200;
      line-height: 1.6rem;
      margin-top: 0.4rem;
    }
    p {
      letter-spacing: 0.05em;
      font-size: 0.9rem;
      font-weight: 300;
      line-height: 1.3rem;
      margin-top: 0.4rem;
      margin-bottom: 0.8rem;
      padding-bottom: 2rem;
    }
    a {
      display: inline-block;
      padding-left: 85px;
      position: relative;
      font-weight: 500;
      transition: 0.708s ease-out 0.108s;
      font-size: 0.89474rem;
      line-height: 1.36842rem;
      letter-spacing: 0.5px;
      text-decoration: none;
      text-transform: uppercase;
      &::before {
        transition: 0.6s ease-out;
        content: '';
        display: inline-block;
        width: 72px;
        height: 1px;
        background-color: #374818;
        position: absolute;
        top: 50%;
        left: 0;
      }
    }
    a:hover {
      padding-left: 0;
    }
    a:hover::before {
      width: 0;
    }
  }
`

const PageDividerWrapper = styled.div`
  position: relative;
  margin: 4rem 0 0;
  width: 100%;
  z-index: 4;
  text-align: center;
  div {
    max-height: 100vh;
  }
  svg {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3em;
    z-index: 2;

    .blackStroke {
      fill: none;
      stroke: #fff;
      stroke-width: 3;
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }
  }
  h3 {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 100%;
    padding-top: 15px;
    letter-spacing: 0.10526em;
    text-transform: uppercase;
    font-size: 0.8rem;
    line-height: 1.3rem;
  }
  h4 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 100%;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2rem;
    line-height: 2rem;
  }
  h2 {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 30%;
    padding-top: 0.2rem;
    letter-spacing: 0.10526em;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 1.8rem;
    margin-top: 0.4rem;
  }
  p {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 30%;
    letter-spacing: 0.05em;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.3rem;
    margin-top: 0.4rem;
    margin-bottom: 0.8rem;
  }
  .logoWrapper {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8em;
    z-index: 2;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      width: 12em;
    }
  }
  a {
    color: #fff;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: inline-block;
    font-weight: 500;
    transition: 0.708s ease-out 0.108s;
    font-size: 0.89474rem;
    line-height: 1.36842rem;
    letter-spacing: 0.5px;
    text-decoration: none;
    text-transform: uppercase;
    &::before {
      transition: 0.6s ease-out;
      content: '';
      display: inline-block;
      width: 72px;
      height: 1px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: -84px;
    }
    &::after {
      transition: 0.6s ease-out;
      content: '';
      display: inline-block;
      width: 72px;
      height: 1px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      right: -84px;
    }
  }
`

const IndexPage = ({ data }) => {
  const page = data.contentfulMowi
  // Initiallized timelinemax
  const tl = new TimelineMax()
  // Setup refs to access the paths
  const leftPathRef = useRef(null)
  const rightPathRef = useRef(null)
  const typoRef = useRef(null)
  const titleRef = useRef(null)
  // const plugins = [DrawSVGPlugin];

  useEffect(() => {
    tl.from(leftPathRef.current, 2, { drawSVG: 0 ,ease: Expo.easeInOut})
    tl.from(rightPathRef.current, 2, { drawSVG: 0,ease: Expo.easeInOut }, "-=2")
    tl.from(typoRef.current, 2, { opacity: 0,ease: Expo.easeInOut }, "-=1.5")
    tl.from(titleRef.current, 0.5, {opacity: 0, y: "20px",ease: Expo.easeInOut}, "-=1.6")
  }, [])
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <SEO title="Home" />
      <IntroHome>
        <BgImg
          height={'100vh'}
          fluid={page.cover.fluid}
          alt={page.cover.title}
          title={page.cover.title}
        />
        <svg
          version="1.1"
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 284.861 92.108"
        >
          <path
            ref={leftPathRef}
            className="strokeFill"
            d="M135.587,7.565c-14.561,0-26.365,11.804-26.365,26.365s11.804,26.365,26.365,26.365h-34.02"
          />
            <path
              ref={rightPathRef}
              className="strokeFill"
              d="M135.587,7.565c14.561,0,26.365,11.804,26.365,26.365s-11.804,26.365-26.365,26.365h34.02"
          />
          <g ref={typoRef}>
          <path
            className="whiteFill"
            d="M166.696,2.978h14.995l13.178,43.078l14.269-43.26h11.997l14.268,43.26L248.58,2.978h14.632l-21.72,64.072
	h-12.178l-14.359-41.624L200.595,67.05h-12.178L166.696,2.978z"
          />
          <path
            className="whiteFill"
            d="M98.173,66.868H83.178L70,23.79L55.732,67.05H43.735L29.467,23.79L16.289,66.868H1.657l21.72-64.072h12.178
	L49.915,44.42L64.275,2.796h12.178L98.173,66.868z"
          />
          <path
            className="whiteFill"
            d="M269.207,2.978h13.996v63.617h-13.996V2.978z"
          />
          
            <path
              className="whiteFill"
              d="M215.267,85.695c-0.869-0.892-1.303-2.188-1.303-3.892v-6.874h1.269v6.823c0,1.395,0.314,2.434,0.943,3.119
		c0.628,0.687,1.537,1.029,2.726,1.029c1.2,0,2.114-0.343,2.743-1.029c0.628-0.686,0.943-1.725,0.943-3.119v-6.823h1.234v6.874
		c0,1.703-0.432,3-1.294,3.892s-2.071,1.337-3.625,1.337S216.135,86.586,215.267,85.695z"
            />
            <path
              className="whiteFill"
              d="M237.673,74.929v12h-1.046l-7.714-9.737v9.737h-1.269v-12h1.046l7.731,9.737v-9.737H237.673z"
            />
            <path
              className="whiteFill"
              d="M241.581,74.929h1.269v12h-1.269V74.929z"
            />
            <path
              className="whiteFill"
              d="M258.844,87.941c-0.366,0.445-0.797,0.785-1.294,1.02s-1.037,0.352-1.62,0.352
		c-0.709,0-1.38-0.175-2.015-0.522c-0.634-0.349-1.346-0.935-2.134-1.758c-1.154-0.034-2.194-0.319-3.12-0.856
		c-0.925-0.537-1.651-1.263-2.177-2.178c-0.526-0.914-0.789-1.937-0.789-3.068c0-1.154,0.271-2.194,0.814-3.12
		s1.297-1.654,2.263-2.186c0.965-0.531,2.042-0.797,3.231-0.797c1.188,0,2.26,0.263,3.214,0.788
		c0.955,0.526,1.706,1.255,2.254,2.186c0.549,0.932,0.823,1.975,0.823,3.129c0,1.006-0.208,1.929-0.625,2.769
		c-0.417,0.84-1,1.54-1.749,2.1c-0.749,0.561-1.609,0.932-2.58,1.114c0.88,0.926,1.749,1.389,2.606,1.389
		c0.891,0,1.651-0.365,2.28-1.097L258.844,87.941z M247.607,83.466c0.44,0.754,1.046,1.349,1.817,1.783s1.631,0.651,2.58,0.651
		c0.948,0,1.806-0.217,2.571-0.651s1.366-1.029,1.8-1.783c0.435-0.754,0.651-1.6,0.651-2.537c0-0.937-0.217-1.783-0.651-2.537
		c-0.434-0.754-1.034-1.349-1.8-1.783c-0.766-0.434-1.623-0.651-2.571-0.651c-0.949,0-1.809,0.218-2.58,0.651
		c-0.771,0.435-1.377,1.029-1.817,1.783s-0.66,1.601-0.66,2.537C246.947,81.867,247.167,82.712,247.607,83.466z"
            />
            <path
              className="whiteFill"
              d="M262.341,85.695c-0.869-0.892-1.303-2.188-1.303-3.892v-6.874h1.269v6.823c0,1.395,0.314,2.434,0.943,3.119
		c0.628,0.687,1.537,1.029,2.726,1.029c1.2,0,2.114-0.343,2.743-1.029c0.628-0.686,0.943-1.725,0.943-3.119v-6.823h1.234v6.874
		c0,1.703-0.432,3-1.294,3.892s-2.071,1.337-3.625,1.337S263.209,86.586,262.341,85.695z"
            />
            <path
              className="whiteFill"
              d="M283.203,85.832v1.097h-8.486v-12h8.229v1.097h-6.96v4.269h6.206v1.08h-6.206v4.458H283.203z"
            />
          </g>
        </svg>

        <h1 ref ={titleRef}>
          DÉCOUVREZ LE PLAISIR ET LES BIENFAITS <br /> D’UN SAUMON UNIQUE ÉLEVÉ
          AVEC SOIN ET RESPECT
        </h1>
        <div className="home-scroll-invite">
          <div className="v-line"></div>
          <span className="home-scroll-invite__label">Scroll</span>
        </div>
      </IntroHome>
      <PostOuterWrapper>
        <PostInnerWrapper>
          <PostInfo>
            <div className="post-info__left">
              <Img fluid={page.images[0].fluid} alt={page.images[0].title} />
            </div>
            <div className="post-info__right">
              <svg
                version="1.1"
                id="Calque_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 89.32 50.74"
              >
                <path
                  className="blackStroke"
                  d="M6.469,42.197c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,33.486c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,24.775c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,16.064c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,7.353c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
              </svg>
              <h3>L’élevage</h3>
              <h4>Unique</h4>
              <h2>parce que nous élevons nos Saumons avec soin</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut.
              </p>
              <Link to="/">Notre process d’élevage</Link>
            </div>
          </PostInfo>
          <PostInfo>
            <div className="post-info__left">
              <Img fluid={page.images[1].fluid} alt={page.images[1].title} />
            </div>
            <div className="post-info__right">
              <svg
                version="1.1"
                id="Calque_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 89.32 50.74"
              >
                <path
                  className="blackStroke"
                  d="M6.469,42.197c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,33.486c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,24.775c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,16.064c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,7.353c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
              </svg>
              <h3>Bien-être</h3>
              <h4>Healthy</h4>
              <h2>Nos Saumonssont un bienfait pour notre organisme </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut.
              </p>
              <Link to="/">Les bienfaits du saumon</Link>
            </div>
          </PostInfo>
          <PostInfo>
            <div className="post-info__left">
              <Img fluid={page.images[2].fluid} alt={page.images[2].title} />
            </div>
            <div className="post-info__right">
              <svg
                version="1.1"
                id="Calque_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 89.32 50.74"
              >
                <path
                  className="blackStroke"
                  d="M6.469,42.197c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,33.486c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,24.775c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,16.064c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
                <path
                  className="blackStroke"
                  d="M6.469,7.353c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
                />
              </svg>
              <h3>Inspiration du moment</h3>
              <h4>Dégustations</h4>
              <h2>DES INSPIRATIONS POUR DÉGUSTER LE SAUMON TOUTE L’ANNÉE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut.
              </p>
              <Link to="/">DÉCOUVREZ NOS RECETTES DU MOMENT</Link>
            </div>
          </PostInfo>
          <PageDividerWrapper>
            <BgImg height={'100vh'} fluid={page.pageDivider.fluid} />
            <svg
              version="1.1"
              id="Calque_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 89.32 50.74"
            >
              <path
                className="blackStroke"
                d="M6.469,42.197c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
              />
              <path
                className="blackStroke"
                d="M6.469,33.486c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
              />
              <path
                className="blackStroke"
                d="M6.469,24.775c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
              />
              <path
                className="blackStroke"
                d="M6.469,16.064c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
              />
              <path
                className="blackStroke"
                d="M6.469,7.353c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
	c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
	s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
              />
            </svg>
            <h3>Engagement</h3>
            <h4>Respect</h4>
            <h2>L'impact sur l'environnement est une préoccupation majeure</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut.
            </p>
            <div className="logoWrapper">
              <Img fluid={page.logo.fluid} alt={page.logo.title} />
            </div>
            <Link to="/">DÉCOUVREZ NOS ENGAGEMENTS</Link>
          </PageDividerWrapper>
        </PostInnerWrapper>
      </PostOuterWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulMowi {
      cover {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      images {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      pageDivider {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      logo {
        fluid(maxWidth: 400) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default IndexPage
