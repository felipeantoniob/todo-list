const easing = [0.6, -0.5, 0.01, 0.99]

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  exit: {
    y: 60,
    opacity: 0,
  },
}

export const stagger = {
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}
