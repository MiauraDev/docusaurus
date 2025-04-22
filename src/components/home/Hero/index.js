import { motion } from 'framer-motion'
import styles from './styles.module.css'

const variants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.6,
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0, y: 30 },
}

function Name() {
  return (
    <motion.div
      className={styles.hero_text}
      custom={1}
      initial="hidden"
      animate="visible"
      variants={variants}
      onMouseMove={(e) => {
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`)
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`)
      }}
    >
      <div className={styles.divsmallText}>
        <span className={styles.smallText}>Manual</span>
      </div>
      <div>
        <span className={styles.name}>
          DevTools
        </span>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <div className={styles.area}>
      <motion.div className={styles.hero}>
        <div className={styles.intro}>
          <Name />
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={variants}
            className={styles.description}
          >
            La guía definitiva para dominar el Inspector de Chrome, una herramienta esencial para desarrolladores web. Aquí aprenderás todo lo que ofrece DevTools para mejorar tus habilidades de desarrollo y depuración en la web.
          </motion.p>

          <motion.div
            className={styles.buttonWrapper}
            custom={4}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <a href="/docs/intro" className={styles.startButton}>
              Comenzar
            </a>
          </motion.div>
        </div>
      </motion.div>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
