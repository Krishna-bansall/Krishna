import React from 'react'

export const GradientText = ({text}) => {
  return (
    <h1 className='text-transparent font-display font-semibold bg-clip-text sm:text-6xl text-4xl bg-gradient-to-br from-purple to-pink'>{text}</h1>
  )
}
 