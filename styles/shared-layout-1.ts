import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Cards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 24rem;
  height: 16rem;
  gap: 1rem;
`

export const Card = styled(motion.div)`
  cursor: pointer;
  background: red;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 2rem;
  border-radius: 1rem;
`

export const Overlay = styled(motion.div)`
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const OverlayWrapper = styled(motion.div)`
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  margin: 10%;
`
