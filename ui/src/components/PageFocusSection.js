import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { LiveMessage } from 'react-aria-live'
import DocumentTitle from 'react-document-title'
import SkipLinks from './SkipLinks'
import { withRouter } from 'react-router-dom'

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
      }],
      sectionFocus: true
    }
  }

  componentDidMount () {
    const { location } = this.props
    if (location.state && location.state.setFocus) {
    // const { browserHistory } = this.props
    // if (this.state && this.state.setFocus) {
    // this.header.focus()
      this.section.focus()
    }
  }

  render () {
    const { docTitle, liveMessage, children, headingText } = this.props
    return (
      <DocumentTitle title={docTitle}>
        <div>
          <LiveMessage aria-live='polite' message={liveMessage} />
          <section tabIndex='-1' ref={section => (this.section = section)}>
            <h2 tabIndex='-1' ref={header => (this.header = header)}>
              {headingText}
            </h2>
            <SkipLinks skiplinks={this.state.skiplinks} />
            {children}
          </section>
        </div>
      </DocumentTitle>
    )
  }
}

PageFocusSection.propTypes = {
  browserHistory    : React.PropTypes.object.isRequired,
  docTitle    : React.PropTypes.string,
  liveMessage : React.PropTypes.string,
  children    : React.PropTypes.object,
  headingText : React.PropTypes.string
}

export default withRouter(PageFocusSection)
