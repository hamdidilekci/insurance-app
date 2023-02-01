import React from 'react'

export default function Label({children}) {
  return (
    <label 
      style={{
        color: "black", 
        fontFamily: 'sans-serif', 
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifiyContent: 'flex-start',
        textAlign: 'right',
        width: '170px',
        lineHeight: '26px',
      }}
    >
      {children}
    </label>
  )
}
