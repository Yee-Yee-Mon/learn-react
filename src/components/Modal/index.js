import React from 'react'
import './index.css'
import reactDom from 'react-dom'

export default function Modal({children, danger= false, setShowModal}) {
  return (
    reactDom.createPortal( 
      <div className="modal-backdrop">
        <div className="modal" style={{
          border : '4px solid',
          borderColor : danger ? "red" : "blue"
        }}>
           {children}
           <button onClick={() =>setShowModal(false)}>close</button>
        </div>

    </div>, document.getElementById("modal")
    )
  )
}
