import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint';
import Img from 'gatsby-image'

const PostInfoLeft = styled.div`
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
      
      /* transform: scale(1.2); */
    }
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      margin: 0;
      flex: 0 1 45%;
    }
`
const ImageWrapper = ({ images }) => {
    const [on, toggle] = useState(false);
    const ImageWrapperAnimation = useSpring({
        transform: on ? 'scaleX(0)' : 'scaleX(0.2)',
        config: config.slow,
    })
    return (
        <>
            <Waypoint
                onEnter={() => {
                    if (!on) toggle(true);
                }}
            />
            <PostInfoLeft>
                <animated.div className="bcgWhite" style={ImageWrapperAnimation}></animated.div>
                <Img fluid={images.fluid} alt={images.title} />
            </PostInfoLeft>
        </>
    )
}

export default ImageWrapper