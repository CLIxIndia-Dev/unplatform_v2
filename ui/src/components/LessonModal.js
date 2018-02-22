import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import AriaModal from 'react-aria-modal'
import { log } from '../utilities'

class LessonModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalActive: false
    }
  }

  render () {
    return (
      <AriaModal
        titleId={this.props.titleId}
        onExit={this.props.onExit}
        underlayClickExits={this.props.underlayClickExits}
        verticallyCenter={this.props.verticallyCenter}
      >
        <div className='c-modal__container'>
          <dialog open className='c-modal__dialog span_6_of_12'>
            <h2 id='modal-title' className='c-modal__dialog-title'>
              {this.props.strings.unplatformNav.endSession}
            </h2>
            <form method='dialog'>
              <button value='close' onClick={this._onFinishLesson}>
                {this.props.strings.prompt.yes}
              </button>
              <button value='close' onClick={this.props.onExit}>
                {this.props.strings.prompt.no}
              </button>
            </form>
          </dialog>
        </div>
      </AriaModal>
    )
  }

  _onFinishLesson = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      appName: 'unplatform',
      action: 'clicked_finished',
      params: {
        url: `/subjects/${this.props.subjectName}/units/${this.props.unitName}/lessons/${this.props.lessonName}`,
        response: 'yes'
      }
    })
    this.props.onFinish()
    browserHistory.push('/')
  }

}

LessonModal.propTypes = {
  titleId            : React.PropTypes.string,
  onExit             : React.PropTypes.func,
  underlayClickExits : React.PropTypes.bool,
  verticallyCenter   : React.PropTypes.bool,
  strings            : React.PropTypes.object,
  locale             : React.PropTypes.string,
  sessionId          : React.PropTypes.string,
  version            : React.PropTypes.string,
  subjectName        : React.PropTypes.string,
  gradeName          : React.PropTypes.string,
  unitName           : React.PropTypes.string,
  lessonName         : React.PropTypes.string,
  onFinish           : React.PropTypes.func
}

export default LessonModal
