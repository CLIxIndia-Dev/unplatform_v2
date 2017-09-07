import React from 'react'
import './CoreLayout.scss'
// import '../../styles/core.css'
import '../../styles/_base.scss'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <div className='core-layout__viewport' aria-live='polite'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
