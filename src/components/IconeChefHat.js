import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'

const IconChefHatSVG = styled(animated.svg)`
  width: 3em;
`

const IconChefHat = () => {
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
      <IconChefHatSVG
        viewBox="0 0 76.663 80.079"
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
          d="M70.46,35.925c0-8.09-5.607-14.854-13.142-16.662C54.656,11.322,47.169,5.592,38.331,5.592
	s-16.324,5.73-18.986,13.671C11.81,21.071,6.203,27.835,6.203,35.925c0,8.138,5.673,14.937,13.276,16.696v21.866h37.579V52.653
	C64.725,50.941,70.46,44.108,70.46,35.925z"
        />
        <line pathLength="100" x1="48.24" y1="30.315" x2="48.24" y2="51.258" />
        <line
          pathLength="100"
          x1="38.331"
          y1="19.942"
          x2="38.331"
          y2="51.258"
        />
        <line
          pathLength="100"
          x1="28.423"
          y1="30.315"
          x2="28.423"
          y2="51.258"
        />
        <line
          pathLength="100"
          x1="20.542"
          y1="67.153"
          x2="56.121"
          y2="67.153"
        />
      </IconChefHatSVG>
    </>
  )
}

export default IconChefHat
