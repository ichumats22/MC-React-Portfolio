import React from 'react'

export function Row({fluid, props, children}) {
  return(
    <div className={`row${fluid ? "-fluid" : ""}`} {...props}>
      {children}
    </div>
  )
}

export function Col({size, props, children}) {
  return(
    <div className={size
      .split(' ')
      .map(size => 'col-' + size)
      .join(' ')} 
    {...props}>
      {children}
    </div>
  )
}