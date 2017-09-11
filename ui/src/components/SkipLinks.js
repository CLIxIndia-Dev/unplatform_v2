import React from 'react'
import SkipLink from './SkipLink'

export const SkipLinks = (props) => {
  const skipLinkList = props.skiplinks.map(skiplink =>
    <SkipLink
      key={skiplink.link}
      link={skiplink.link}
      text={skiplink.text}
    />)

  return (
    <ul className='skip-links'>
      {skipLinkList}
    </ul>)
}

SkipLinks.propTypes = {
  skiplinks : React.PropTypes.object.isRequired
}

export default SkipLinks
