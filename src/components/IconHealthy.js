import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'

const IconHealthySVG = styled(animated.svg)`
  width: 3em;
`

const IconHealthy = () => {
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
        topOffset="10%"
        onEnter={() => setToggle(state => !state)}
        onLeave={() => setToggle(state => !state)}
      />
      <IconHealthySVG
        viewBox="0 0 80.5 70.588"
        fill="none"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={100}
        style={IconUniqueAnimation}
        strokeDashoffset={IconUniqueAnimation.x}
      >
        <path
          pathLength="100"
          d="M48.658,60.852c-2.335,1.941-3.849,3.079-3.849,3.079s-29.518-21.69-29.518-37.193
		c0-15.502,17.984-26.124,29.461-16.27l0,0c13.014-9.667,28.911,0.768,28.911,16.27c0,9.328-10.447,20.897-18.769,28.632"
        />
        <polyline
          pathLength="100"
          points="6.837,39.355 30.675,39.355 37.541,23.394 46.706,42.827 50.196,27.645 66.409,27.675"
        />
      </IconHealthySVG>
    </>
  )
}

export default IconHealthy
