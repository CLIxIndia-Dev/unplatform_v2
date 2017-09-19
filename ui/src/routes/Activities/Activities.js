import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import PageFocusSection from '../../components/PageFocusSection'
import LessonModal from '../../components/LessonModal'
import { log } from '../../utilities'

import '../../styles/components/c-header.css'
import '../../styles/components/c-activity.css'
import '../../styles/components/c-modal.css'

class Activities extends Component {
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
        pathname: `/subjects/${this.props.subjectName}/${this.props.gradeName}/${this.props.unitName}/${this.props.lessonName}`,
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

    let epubUrl = `/static/content_player/index.html?epubUrl=/content/${this.props.subjectName}/${this.props.gradeName}/${this.props.unitName}/${this.props.lessonName}`
    return (
      <PageFocusSection
        docTitle={`${this.props.lessonName} | Clix Modules`}
        liveMessage='Select activity page loaded.'
        location={this.state.location}
      >
        <div className='act-container'>
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
              <button
                onClick={this._onToggleModal}>
                {this.props.strings.unplatformNav.finishLesson}</button>
            </nav>
          </header>
          <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_12_of_12'>
            <iframe src={epubUrl}
              title={`${this.props.subjectName} ${this.props.lessonName}`}
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
    e.preventDefault()
    this.setState({
      showModal: !this.state.showModal
    })
  }

}

Activities.propTypes = {
  strings     : React.PropTypes.object,
  locale      : React.PropTypes.string,
  sessionId   : React.PropTypes.string,
  version     : React.PropTypes.string,
  subjectName : React.PropTypes.string,
  gradeName   : React.PropTypes.string,
  unitName    : React.PropTypes.string,
  lessonName  : React.PropTypes.string,
  onFinish    : React.PropTypes.func
}

export default Activities
