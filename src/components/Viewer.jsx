import React from 'react'

function Viewer({ catalogImage }) {
  return (
    <div className='layout-row justify-content-center'>
      <img 
        alt='catalog-view' 
        src={catalogImage}
        data-testid='catalog-view'
        className ="img"
      />
    </div>
  )
}

export default Viewer