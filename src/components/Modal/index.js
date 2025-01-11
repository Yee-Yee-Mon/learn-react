import React from 'react'
import './index.css'
import reactDom from 'react-dom'

export default function Modal({children}) {
  return (
    reactDom.createPortal(
      <div className="modal-backdrop">
        <div className="modal">
           {children}
        </div>

    </div>, document.getElementById("modal")
    )
  )
}
