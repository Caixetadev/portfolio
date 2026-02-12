import { motion } from 'framer-motion'

export const AnimationContainer = (props) => {
  const { children } = props
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.001,
          },
        },
      }}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 0,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 150,
              damping: 19,
              mass: 1.2,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
