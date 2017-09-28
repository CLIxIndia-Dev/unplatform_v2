import React, { Component } from 'react'
import { LiveMessage } from 'react-aria-live'
import DocumentTitle from 'react-document-title'
import SkipLinks from './SkipLinks'
import Helmet from 'react-helmet'

class PageFocusSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      skiplinks: [{
        link: '#global-nav',
        text: 'Skip to navigation'
      },
      {
        link: '#main',
        text: 'Skip to main content'
      }]
      // sectionFocus: true
    }
  }

  componentDidMount () {
    const { location } = this.props
    if (location.state && location.state.setFocus) {
      this.section.focus()
    }
  }

  render () {
    const { docTitle, liveMessage, children, locale } = this.props
    return (
      <DocumentTitle title={docTitle}>
        <div>
          <Helmet>
            <html lang={locale || 'en'} />
          </Helmet>
          <LiveMessage aria-live='polite' message={liveMessage} />
          <section id='skiplinks-focus' tabIndex='-1' ref={section => (this.section = section)}>
            <SkipLinks skiplinks={this.state.skiplinks} />
            {children}
          </section>
        </div>
      </DocumentTitle>
    )
  }
}

PageFocusSection.propTypes = {
  location    : React.PropTypes.object.isRequired,
  docTitle    : React.PropTypes.string,
  liveMessage : React.PropTypes.string,
  children    : React.PropTypes.object,
  locale      : React.PropTypes.string
}

export default PageFocusSection
