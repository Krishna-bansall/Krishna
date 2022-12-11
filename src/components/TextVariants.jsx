import React from 'react'

export const GradientText = ({ className ,children, ...rest}) => {
  return (
    <h1 className={`text-transparent font-display font-semibold bg-clip-text ${className}  bg-gradient-to-br from-purple to-pink `} 
    {...rest}>{children}</h1>
  )
}
 