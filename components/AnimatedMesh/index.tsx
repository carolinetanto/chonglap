import React from 'react'
import Animation from '@/styles/animated.css'

const index = () => {
  return (
    <div className="absolute">
        <div className="absolute inset-0 justify-center">
            <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
            <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
            <div className="bg-shape1 bg-purple opacity-50 bg-blur"></div>
        </div>
    </div>
  )
}

export default index