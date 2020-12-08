import { motion, Variants } from 'framer-motion'
import { Row } from '../styles/hover'

const bgVariants: Variants = {
  initial: {
    width: '4rem',
    height: '4rem'
  },
  hover: {
    width: '40rem',
    height: '40rem'
  }
}

const Hover: React.FC = () => {
  return (
    <div>
      <Row initial="initial" whileHover="hover">
        <div className="overlay">
          <strong>Some text</strong>
        </div>

        <motion.div
          className="animated-bg"
          variants={bgVariants}
          transition={{ duration: 0.5 }}
        />
      </Row>
    </div>
  )
}

export default Hover
