import React from 'react'
import { Icon } from 'react-fa'
import BreadcrumbChevron from './BreadcrumbChevron'

import '../../styles/components/c-breadcrumbs.css'

export const Breadcrumbs = (props) => {
  const { clickHandlers, breadcrumbTexts, hrefs } = props

  return (
    <header role='banner' id='global-nav' tabIndex='-1' className='c-breadcrumbs__header'>
      <nav className='c-breadcrumbs__nav'>
        <ul className='c-breadcrumbs__list'>
          {breadcrumbTexts.map((text, index) => {
            if (index === 0) {
              return (
                <li>
                  <Icon
                    name={'home'}
                    className='c-breadcrumb__icon'
                    aria-hidden
                    role='img'
                  />
                  <a onClick={clickHandlers[index]}
                    href='/'>
                    {text}
                  </a>
                </li>
              )
            } else if (index === (breadcrumbTexts.length - 1)) {
              // last breadcrumb is "active" page
              return (
                <li>
                  <BreadcrumbChevron />
                  <a onClick={clickHandlers[index]}
                    href={hrefs[index]} aria-current='page'>
                    {text}
                  </a>
                </li>
              )
            }
            return (
              <li>
                <BreadcrumbChevron />
                <a onClick={clickHandlers[index]}
                  href={hrefs[index]}>
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

Breadcrumbs.propTypes = {
  clickHandlers        : React.PropTypes.array,
  breadcrumbTexts      : React.PropTypes.array,
  hrefs                : React.PropTypes.array
}

export default Breadcrumbs
