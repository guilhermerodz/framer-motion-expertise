import { Variants } from 'framer-motion'

import { Circle, CircleList } from '../styles/stagger-children'

const variants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delayChildren: 1, staggerChildren: 0.2 }
  }
}

const StaggerChildren: React.FC = () => {
  return (
    <CircleList variants={variants} initial="hidden" animate="show">
      <Circle variants={variants} />
      <Circle variants={variants} />
      <Circle variants={variants} />
      <Circle variants={variants} />
      <Circle variants={variants} />
      <Circle variants={variants} />
      <Circle variants={variants} />
      <Circle variants={variants} />
      <Circle variants={variants} />
    </CircleList>
  )
}

export default StaggerChildren
