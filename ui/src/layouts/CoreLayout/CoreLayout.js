import React from 'react'
import { LiveAnnouncer } from 'react-aria-live'
import '../../styles/_base.scss'

export const CoreLayout = ({ children }) => (
  <LiveAnnouncer>
    <div className='container text-center'>
      <div className='core-layout__viewport'>
        {children}
      </div>
    </div>
  </LiveAnnouncer>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
