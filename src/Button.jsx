import React from 'react'

export default function Button({children, onClick, onChange}) {

  return (
    <div>
        <button className='button' onClick={onClick} >{children}</button>
    </div>
  )
}
