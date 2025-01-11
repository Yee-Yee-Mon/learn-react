import React from 'react'
import './index.css'
import reactDom from 'react-dom'

export default function Modal({children, danger= false}) {
  return (
    reactDom.createPortal( 
      <div className="modal-backdrop">
        <div className="modal" style={{
          border : '4px solid',
          borderColor : danger ? "red" : "blue"
        }}>
           {children}
        </div>

    </div>, document.getElementById("modal")
    )
  )
}
