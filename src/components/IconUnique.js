import React, {useState} from "react";
import { useSpring, animated, config } from "react-spring";
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint';

const IconUniqueSVG = styled(animated.svg)`
    width: 3em;
`

const IconUnique = () => {
    const [toggle, setToggle] = useState(false);
    const IconUniqueAnimation = useSpring({
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 100,
        from: { opacity: 0, x: 100 },
        config: config.molasses,
    })

return (
        <>
    <Waypoint
      bottomOffset="10%"
      topOffset="10%"
      onEnter={() => setToggle(state => !state)}
      onLeave={() => setToggle(state => !state)}
    />
        <IconUniqueSVG
        viewBox="0 0 89.32 50.74"
        fill="none"
        stroke="black"
        strokeWidth= "3"
        strokeMiterlimit= "10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={100}
        style={IconUniqueAnimation}
        strokeDashoffset={IconUniqueAnimation.x}
        
      >
      <path
        pathLength="100"
          className="blackStroke"
          d="M6.469,42.197c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
        />
      <path
        pathLength="100"
          className="blackStroke"
          d="M6.469,33.486c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
        />
      <path
        pathLength="100"
          className="blackStroke"
          d="M6.469,24.775c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
        />
        <path
        className="blackStroke"
        pathLength="100"
          d="M6.469,16.064c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
        />
        <path
        className="blackStroke"
        pathLength="100"
          d="M6.469,7.353c4.087,0,6.155,0.827,8.154,1.627c1.815,0.727,3.53,1.413,7.04,1.413
c3.511,0,5.226-0.686,7.042-1.413c2-0.8,4.068-1.627,8.157-1.627s6.157,0.827,8.157,1.627c1.816,0.727,3.532,1.413,7.043,1.413
s5.228-0.686,7.045-1.413c2-0.8,4.068-1.627,8.158-1.627c4.089,0,6.157,0.827,8.157,1.627c1.817,0.727,3.533,1.413,7.045,1.413"
        />
            </IconUniqueSVG>
            </>
)
}

export default IconUnique