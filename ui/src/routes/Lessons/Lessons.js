import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Icon } from 'react-fa'
import BreadcrumbChevron from '../../components/BreadcrumbChevron'
import PageFocusSection from '../../components/PageFocusSection'
import { log } from '../../utilities'

import '../../styles/components/c-breadcrumbs.css'
import '../../styles/buttons.css'

let backgroundImage = require('../../assets/clix-i2c-flowers.svg')

class Lessons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: {
        pathname: `/subjects/${this.props.subjectName}/grades/${this.props.gradeName}/units/${this.props.unitName}/lessons/${this.props.lessonName}`,
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

  renderLessons = (lessonName, index) => {
    return <button className='lesn-but'
      onClick={(e) => this._onHandleSelectLesson(e, lessonName)}>{lessonName}</button>
  }

  render () {
    if (!this.props.locale) {
      return (
        <div>
          <h1>Please set your school configuration at this <a href='/school'>link</a>.</h1>
        </div>
      )
    }

    return (
      <PageFocusSection
        docTitle={`${this.props.unitName} | Clix Modules`}
        liveMessage='Select lesson page loaded.'
        location={this.state.location}
      >
        <div className='gradient-wrapper'>
          <img src={backgroundImage} alt='' aria-hidden className='gradient-wrapper__image' />
          <header role='banner' id='global-nav' tabIndex='-1' className='c-breadcrumbs__header'>
            <nav className='c-breadcrumbs__nav'>
              <ul className='c-breadcrumbs__list'>
                <li>
                  <Icon
                    name={'home'}
                    className='c-breadcrumb__icon'
                    aria-hidden
                    role='img'
                  />
                  <a onClick={this._onHandleSelectUser}
                    href='/'>
                    {this.props.strings.breadcrumbs.selectUser}
                  </a>
                </li>
                <li>
                  <BreadcrumbChevron />
                  <a onClick={this._onHandleSelectSubjects}
                    href='/subjects'>
                    {this.props.strings.breadcrumbs.selectSubject}
                  </a>
                </li>
                <li>
                  <BreadcrumbChevron />
                  <a onClick={this._onHandleSelectGrades}
                    href={`/subjects/${this.props.subjectName}`}>
                    {this.props.strings.breadcrumbs.selectClass}
                  </a>
                </li>
                <li>
                  <BreadcrumbChevron />
                  <a onClick={this._onHandleSelectUnits}
                    href={`/subjects/${this.props.subjectName}/grades/${this.props.gradeName}`}>
                    {this.props.strings.breadcrumbs.selectUnit}
                  </a>
                </li>
                <li>
                  <BreadcrumbChevron />
                  <a onClick={this._onHandleSelectLesson}
                    href={`/subjects/${this.props.subjectName}/grades/${this.props.unitName}`} aria-current='page'>
                    {this.props.strings.breadcrumbs.selectLesson}
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_10_of_12 main-content'>
            <h1 className='pg-heading-1'>{this.props.strings.moduleNav.selectYourLesson}</h1>
            <article className='choice-select__wrapper button-group' role='group'>
              {_.map(this.props.lessons, this.renderLessons)}
            </article>
          </main>
        </div>
      </PageFocusSection>
    )
  }

  _onHandleSelectUser = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select User'
    })
    browserHistory.push('/')
  }

  _onHandleSelectSubjects = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Select Subjects`
    })
    browserHistory.push(`/subjects`)
  }

  _onHandleSelectGrades = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select Grades'
    })
    browserHistory.push(`/subjects/${this.props.subjectName}`)
  }

  _onHandleSelectUnits = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select Units'
    })
    browserHistory.push(`/subjects/${this.props.subjectName}/grades/${this.props.gradeName}`)
  }

  _onHandleSelectLesson = (e, lessonName) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Lesson: ${lessonName}`
    })
    browserHistory.push(`/subjects/${this.props.subjectName}/grades/${this.props.gradeName}/units/${this.props.unitName}/lessons/${lessonName}`)
  }
}

Lessons.propTypes = {
  lessons     : React.PropTypes.object,
  strings     : React.PropTypes.object,
  subject     : React.PropTypes.string,
  subjectName : React.PropTypes.string,
  gradeName   : React.PropTypes.string,
  unitName    : React.PropTypes.string,
  locale      : React.PropTypes.string,
  sessionId   : React.PropTypes.string
}

export default Lessons
