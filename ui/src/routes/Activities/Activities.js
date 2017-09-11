import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import DocumentTitle from 'react-document-title'
import SkipLinks from '../../components/SkipLinks'
import { log } from '../../utilities'

import '../../styles/components/c-header.css'
import '../../styles/components/c-activity.css'
import '../../styles/components/c-modal.css'

class Subjects extends Component {
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
      }]
    }
  }

  componentDidMount () {
    if (!this.props.sessionId) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps (nextProps) {

  }

  renderTool = (tool, index) => {
    return <button className='choice-select'
      onClick={() => this._onHandleSelectTool(tool)}>{tool}</button>
  }

  render () {
    if (!this.props.locale) {
      return (
        <div>
          <h1>Please set your school configuration at this <a href='/school'>link</a>.</h1>
        </div>
      )
    }

    let sessionModal

    if (this.state.showModal) {
      sessionModal = (
        <div className='c-modal__container'>
          <dialog open className='c-modal__dialog span_6_of_12'>
            <h2 className='c-modal__dialog-title'>
              {this.props.strings.unplatformNav.endSession}
            </h2>
            <form method='dialog'>
              <button value='close' onClick={this._onFinishLesson}>
                {this.props.strings.prompt.yes}
              </button>
              <button value='close' onClick={this._onToggleModal}>
                {this.props.strings.prompt.no}
              </button>
            </form>
          </dialog>
        </div>
      )
    }

    let epubUrl = `/static/content_player/index.html?epubUrl=/content/${this.props.subjectName}/${this.props.gradeName}/${this.props.unitName}/${this.props.lessonName}`
    return (
      <DocumentTitle title={`${this.props.lessonName} | Clix Modules`}>
        <div className='act-container'>
          <SkipLinks skiplinks={this.state.skiplinks} />
          <header role='banner' id='global-nav' tabIndex='-1' className='c-header'>
            <h1 className='c-header__logo' aria-label='Clix Connected Learning Initiative'>CLIx Connected Learning Initiative</h1>
            <p className='c-header--unplat-v'>unplatform version {this.props.version}</p>
            <nav className='c-header__nav'>
              <a href='/tools'
                onClick={this._onChooseTool}>
                {this.props.strings.unplatformNav.chooseTool}</a>
              <a href={`/subjects/${this.props.subjectName}/grades/${this.props.gradeName}/units/${this.props.unitName}`}
                onClick={this._onChooseLesson}>
                {this.props.strings.unplatformNav.chooseNewLesson}</a>
              <a href='/'
                onClick={this._onToggleModal}>
                {this.props.strings.unplatformNav.finishLesson}</a>
            </nav>
          </header>
          <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_12_of_12'>
            <iframe src={epubUrl}
              title={`${this.props.subjectName} ${this.props.lessonName}`}
              className='act-iframe--fill-win'
              frameBorder='0'
              allowFullScreen
            />
            {sessionModal}
          </main>
        </div>
      </DocumentTitle>
    )
  }

  _onFinishLesson = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      appName: 'unplatform',
      action: 'clicked_finished',
      params: {
        url: `/subjects/${this.props.subjectName}/grades/${this.props.gradeName}/units/${this.props.unitName}/lessons/${this.props.lessonName}`,
        response: 'yes'
      }
    })
    this.props.onFinish()
    browserHistory.push('/')
  }

  _onChooseTool = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      appName: 'unplatform',
      action: 'clicked_choose_tool',
      params: {
        url: `/subjects/${this.props.subjectName}/grades/${this.props.gradeName}/units/${this.props.unitName}/lessons/${this.props.lessonName}`
      }
    })
    browserHistory.push('/tools')
  }

  _onChooseLesson = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      appName: 'unplatform',
      action: 'clicked_choose_new_lesson',
      params: {
        url: `/subjects/${this.props.subjectName}/grades/${this.props.gradeName}/units/${this.props.unitName}/lessons/${this.props.lessonName}`
      }
    })
    browserHistory.push(
      `/subjects/${this.props.subjectName}/grades/${this.props.gradeName}/units/${this.props.unitName}`)
  }

  _onToggleModal = (e) => {
    this.setState({ showModal: !this.state.showModal })
  }

}

export default Subjects
