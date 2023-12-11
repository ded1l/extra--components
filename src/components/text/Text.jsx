import React from 'react'
import './text.css'
const Text = ({children, bold, size, color }) => {

    let fontweight = bold === "true" ? "bold" : "normal";
  return (
    <div className='text'>
           <p
        style={{
          fontWeight: fontweight,
          fontSize: size,
          color: color,
        }}
      >
        {children}
      </p>
    </div>
  )
}

export default Text
