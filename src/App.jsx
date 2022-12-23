import { motion } from 'framer-motion'

import './App.scss'

function App() {

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:3}}
      className="radar"
    >
      <motion.div
        animate={{
          rotate: -360
        }}
        transition={{
          ease: "linear",
          duration: 7,
          repeat: Infinity
        }}
        className="pointer"
      ></motion.div>
    </motion.div>
  )
}

export default App
