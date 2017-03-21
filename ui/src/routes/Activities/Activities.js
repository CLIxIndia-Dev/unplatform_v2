import _ from 'lodash'
import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import Radium from 'radium'
import {Icon} from 'react-fa'

import {log} from '../../utilities'

import '../../styles/core.css'
import '../../styles/buttons.css'
import '../../styles/header.css'
import '../../styles/activity.css'
import '../../styles/nav.css'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh',
    flexDirection: 'column'
  },
  navWrapper: {
    flex: 1
  },
  section: {
    flex: 50,
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontWeight: 'bold',
    marginRight: '15px',
    marginBottom: '15px',
    flex: 2
  },
  formRow: {
    display: 'flex',
    width: '400px',
    margin: '5px 5px'
  },
  value: {
    flex: 2
  },
  navTitle: {
  },
  background: {
    backgroundColor: 'white'
  },
  header: {
    position: 'relative',
    left: 0,
    top: 0,
    width: '100%',
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
    zIndex: 5
  },
  nav: {
    position: 'absolute',
    top: '29px',
    right: '1em'
  }
}

@Radium
class Subjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  componentDidMount () {
    if (!this.props.sessionId) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {

  }

  renderTool = (tool, index) => {
    return <button className="choice-select"
      onClick={() => this._onHandleSelectTool(tool)}>{tool}</button>
  }

  render() {
    if (!this.props.locale) {
      return (
        <div>
          <h1>Please set your school configuration at this <a href="/school">link</a>.</h1>
        </div>
      )
    }

    let sessionModal

    if (this.state.showModal) {
      sessionModal = (
        <div className="container-popup">
          <dialog open className="zoomModal span_6_of_12">
            <h2 className="zoom-label">{this.props.strings.unplatformNav.endSession}"</h2>
           <form method="dialog">
              <button value="close" onClick={this._onFinishLesson}>{this.props.strings.prompt.yes}</button>
              <button value="close" onClick={this._onToggleModal}>{this.props.strings.prompt.no}</button>
            </form>
          </dialog>
        </div>
      )
    }

    let epubUrl = `/static/content_player/index.html?epubUrl=/content/${this.props.subjectName}/${this.props.gradeName}/${this.props.unitName}/${this.props.lessonName}`
    return (
      <div style={styles.container} >
        <header style={styles.header}>
          <h1 className="logo">CLIx Connected Learning Initiative</h1>
          <p className="unplat-v">unplatform version {this.props.version}</p>
          <nav style={styles.nav}>
            <button onClick={this._onChooseTool}>{this.props.strings.unplatformNav.chooseTool}</button>
            <button onClick={this._onChooseLesson}>{this.props.strings.unplatformNav.chooseNewLesson}</button>
            <button onClick={this._onToggleModal}>{this.props.strings.unplatformNav.finishLesson}</button>
          </nav>
        </header>
        <main className="span_12_of_12" style={styles.background}>
          <iframe src={epubUrl} className="fill-win" frameBorder="0" allowfullscreen></iframe>
          {sessionModal}
        </main>
      </div>
    )
  }

  _onFinishLesson = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      appName: "unplatform",
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
      appName: "unplatform",
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
      appName: "unplatform",
      action: 'clicked_choose_new_lesson',
      params: {
        url: `/subjects/${this.props.subjectName}/grades/${this.props.gradeName}/units/${this.props.unitName}/lessons/${this.props.lessonName}`
      }
    })
    browserHistory.push(`/subjects/${this.props.subjectName}/grades/${this.props.gradeName}/units/${this.props.unitName}`)
  }

  _onToggleModal = (e) => {
    this.setState({ showModal: !this.state.showModal })
  }

}

export default Subjects
