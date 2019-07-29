import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint';
import Img from 'gatsby-image'

const PostInfoLeft = styled(animated.div)`
    margin: 0 0 1em 0;
    width: 100%;
    height: 385px;
    position: relative;
    overflow: hidden;
    .bcgWhite {
        position: absolute;
        top: 0;
        right: 0;
        background: #fff;
        width: 100%;
        height: 100%;
        z-index: 5;
        transform-origin: right;
    }
    div {
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      margin: 0;
      flex: 0 1 45%;
    }
`
const AnimImg = styled(animated.div)`
  width: 100%;
`
const ImageWrapper = ({ images }) => {
    const [on, toggle] = useState(false);
    const ImageWrapperAnimation = useSpring({
        transform: on ? 'scaleX(0)' : 'scaleX(0.2)',
        config: config.molasses,
    })
    const ScaleImageAnimation = useSpring({
        transform: on ? 'scale(1)' : 'scale(1.2)',
        config: config.molasses,
    })
    const TranslateImageAnimation = useSpring({
        transform: on ? 'translate3d(0,0,0)' : 'translate3d(-7%,0,0)',
        config: config.molasses,
    })
    return (
        <>
            <Waypoint
                onEnter={() => {
                    if (!on) toggle(true);
                }}
            />
            <PostInfoLeft style={TranslateImageAnimation}>
                <animated.div className="bcgWhite" style={ImageWrapperAnimation}></animated.div>
                <AnimImg style={ScaleImageAnimation}>
                    <Img fluid={images.fluid} alt={images.title} />
                </AnimImg>
            </PostInfoLeft>
        </>
    )
}

export default ImageWrapper