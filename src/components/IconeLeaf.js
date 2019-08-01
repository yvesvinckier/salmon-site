import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'

const IconLeafSVG = styled(animated.svg)`
  width: 3em;
  z-index: 2;
`

const IconLeaf = () => {
  const [toggle, setToggle] = useState(false)
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
        onEnter={() => setToggle(state => !state)}
        onLeave={() => setToggle(state => !state)}
      />
      <IconLeafSVG
        viewBox="0 0 49.897 70.969"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={100}
        style={IconUniqueAnimation}
        strokeDashoffset={IconUniqueAnimation.x}
      >
        <path
          pathLength="100"
          d="M43.702,35.027L43.702,35.027L24.949,5.186L6.195,35.027l0,0c-1.53,2.914-2.258,6.225-2.258,9.745
		c0,11.604,9.407,21.011,21.011,21.011c11.604,0,21.011-9.407,21.011-21.011C45.96,41.252,45.232,37.941,43.702,35.027z"
        />
        <line pathLength="100" x1="24.949" y1="5.186" x2="24.949" y2="65.763" />
        <line
          pathLength="100"
          x1="17.224"
          y1="26.669"
          x2="24.014"
          y2="33.459"
        />
        <line
          pathLength="100"
          x1="17.224"
          y1="35.141"
          x2="24.014"
          y2="41.932"
        />
        <line
          pathLength="100"
          x1="17.224"
          y1="43.614"
          x2="24.014"
          y2="50.405"
        />
        <line
          pathLength="100"
          x1="17.224"
          y1="52.087"
          x2="24.014"
          y2="58.878"
        />
        <path
          pathLength="100"
          d="M34.82,57.15c-0.45,0.359-0.92,0.694-1.409,1.003c-0.559,0.354-1.141,0.673-1.745,0.956"
        />
        <path
          pathLength="100"
          d="M36.155,33.544c2.868,2.868,4.642,6.83,4.642,11.206c0,3.652-1.235,7.016-3.311,9.696"
        />
      </IconLeafSVG>
    </>
  )
}

export default IconLeaf
