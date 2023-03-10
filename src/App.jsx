import { motion } from 'framer-motion'

import './App.scss'

function Text() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:7}}  className='text-radar'>
      <p className='text-top-left'><span>The time<br />is</span> Running Out<span>.</span></p>
      <p className='text-bottom-left'><span>Get<br /></span> Motivated<span>.</span></p>
      <p className='text-bottom-right'><span>Don´t stop<br /></span>Working<span> hard.</span></p>
      <p className='text-top-right'><span>Focus on<br /> your</span> Goal<span>.</span></p>
    </motion.div>
  )
}

function App() {

  return (
    <>
      <Text />
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:3}}
        className="radar"
      >
        <motion.div
          className="pointer"
        >
        </motion.div>
      </motion.div>
    </>
  )
}

export default App
