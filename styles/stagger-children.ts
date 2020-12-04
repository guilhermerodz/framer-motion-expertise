import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CircleList = styled(motion.div)`
  width: 30rem;
  height: 30rem;

  display: grid;
  gap: 1rem;
  border-radius: 4rem;

  grid-template: repeat(3, 1fr) / repeat(3, 1fr);

  background: gray;
`

export const Circle = styled(motion.div)`
  align-self: center;
  justify-self: center;

  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 50%;
`
