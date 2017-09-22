import React from 'react'

export const SkipLink = (props) => {
  const { link, text } = props
  // using link as key since we're targeting a page id and they're unique
  return (
    <li key={link}><a href={link}>{text}</a></li>
  )
}

SkipLink.propTypes = {
  link : React.PropTypes.string.isRequired,
  text : React.PropTypes.string.isRequired
}

export default SkipLink
