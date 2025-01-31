'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Gradient() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  if (!show) return null

  return (
    <motion.div
      className="absolute inset-0 -z-20"
      style={{
        background: 'linear-gradient(-45deg, #DBE1F9, #F1F1F1, #F6F6F6, #BDBDBD)',
        backgroundSize: '400% 400%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 15,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    />
  )
}