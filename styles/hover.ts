import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Row = styled(motion.div)`
  position: relative;
  overflow: hidden;

  margin: 2rem;
  border: 1px solid #000;

  .overlay {
    z-index: 1;
    position: relative;

    display: flex;
    align-items: center;
    padding: 1rem;

    font-size: 1rem;
    letter-spacing: -0.05em;
    font-weight: 700;
  }

  .animated-bg {
    z-index: 0;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    right: -20%;

    background: red;
    border-radius: 50%;
  }
`
