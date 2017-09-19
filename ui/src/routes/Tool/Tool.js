import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import PageFocusSection from '../../components/PageFocusSection'
import LessonModal from '../../components/LessonModal'
import { log } from '../../utilities'

import '../../styles/components/c-header.css'
import '../../styles/components/c-activity.css'
import '../../styles/components/c-modal.css'

class Tool extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      skiplinks: [{
        link: '#global-nav',
        text: 'Skip to navigation'
      },
      {
        link: '#main',
        text: 'Skip to main content'
      }],
      location: {
        pathname: `/tools/${this.props.toolName}`,
        state: { setFocus: true }
      }
    }
  }

  componentDidMount () {
    if (!this.props.sessionId) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    if (!this.props.locale) {
      return (
        <div>
          <h1>Please set your school configuration at this <a href='/school'>link</a>.</h1>
        </div>
      )
    }

    let toolUrl = `/common/${this.props.toolName}?lang=${this.props.locale}`
    return (
      <PageFocusSection
        docTitle={`${this.props.toolName} | Clix Modules`}
        liveMessage='Select tool page loaded.'
        location={this.state.location}
      >
        <div className='act-container'>
          <header role='banner' id='global-nav' tabIndex='-1' className='c-header'>
            <h1 className='c-header__logo'>CLIx Connected Learning Initiative</h1>
            <p className='c-header--unplat-v'>unplatform version {this.props.version}</p>
            <nav className='c-header__nav'>
              <a href='/tools'
                onClick={this._onChooseTool}>
                {this.props.strings.unplatformNav.chooseTool}</a>
              <a href='/subjects'
                onClick={this._onSelectSubject}>
                {this.props.strings.breadcrumbs.selectSubject}</a>
              <a href='#'
                onClick={this._onToggleModal}>
                {this.props.strings.unplatformNav.finishLesson}</a>
            </nav>
          </header>
          <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_12_of_12'>
            <iframe src={toolUrl}
              title={this.props.toolName}
              className='act-iframe--fill-win'
              frameBorder='0'
              allowFullScreen
            />
            {this.state.showModal
              ? <LessonModal
                {...this.props}
                titleId='modal-title'
                onExit={this._onToggleModal}
                underlayClickExits={false}
                verticallyCenter
              /> : ''
            }
          </main>
        </div>
      </PageFocusSection>
    )
  }

  _onChooseTool = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      appName: 'unplatform',
      action: 'clicked_choose_tool',
      params: {
        url: `/tools/${this.props.toolName}`
      }
    })
    browserHistory.push('/tools')
  }

  _onSelectSubject = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      appName: 'unplatform',
      action: 'clicked_select_subject',
      params: {
        url: `/tools/${this.props.toolName}`
      }
    })
    browserHistory.push('/subjects')
  }

  _onToggleModal = (e) => {
    e.preventDefault()
    this.setState({ showModal: !this.state.showModal })
  }

}

Tool.propTypes = {
  strings     : React.PropTypes.object,
  locale      : React.PropTypes.string,
  sessionId   : React.PropTypes.string,
  version     : React.PropTypes.string,
  toolName    : React.PropTypes.string
}

export default Tool
