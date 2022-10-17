import React from 'react'

type ButtonProps
={
    handleClick: () => void;
    children: React.ReactNode
}
function Button({ handleClick, children } : ButtonProps) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default React.memo(Button)