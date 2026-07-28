'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'

interface MotionSectionProps {
  children: ReactNode
  className?: string
  type?: 'fade' | 'slide-left' | 'slide-right' | 'scale' | 'stagger'
  delay?: number
  threshold?: number
  once?: boolean
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  'slide-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  },
  'slide-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
}

export default function MotionSection({
  children,
  className = '',
  type = 'fade',
  delay = 0,
  threshold = 0.1,
  once = true
}: MotionSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
    margin: "-50px 0px -50px 0px"
  })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible").then(() => {
        setHasAnimated(once)
      })
    }
    if (!isInView && !hasAnimated) {
      controls.start("hidden")
    }
  }, [isInView, controls, hasAnimated, once])

  const selectedVariant = variants[type]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedVariant}
      transition={{ delay }}
      className={className}
    //   style={{ 
    //     // willChange: 'transform, opacity',
    //     transformStyle: 'preserve-3d'
    //   }}
    >
      {children}
    </motion.div>
  )
}