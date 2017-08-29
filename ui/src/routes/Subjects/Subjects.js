import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import BreadcrumbChevron from '../../components/BreadcrumbChevron'
import { log } from '../../utilities'

import '../../styles/components/c-breadcrumbs.css'

let backgroundImage = require('../../assets/clix-i2c-flowers.svg')

class Subjects extends Component {

  componentDidMount () {
    if (!this.props.sessionId && !this.props.isSetSurveyInProgress) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('receiving new props')
  }

  renderSubjects = (subjectName, index) => {
    if (subjectName !== 'Tools') {
      return <button className='choice-select'
        onClick={() => this._onHandleSelectSubject(subjectName)}>{subjectName}</button>
    }
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
      <div className='gradient-wrapper'>
        <img src={backgroundImage} alt='' className='gradient-wrapper__image' />
        <header className='c-breadcrumbs__header'>
          <nav className='c-breadcrumbs__nav'>
            <ul className='c-breadcrumbs__list'>
              <li>
                <BreadcrumbChevron />
                <a onClick={this._onHandleSelectUser} href='/'>{this.props.strings.breadcrumbs.selectUser}</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className='span_10_of_12 main-content'>
          <h1 className='pg-title'>{this.props.strings.moduleNav.selectYourSubject}</h1>
          <article className='choice-select__wrapper button-group' role='group'>
            {_.map(this.props.subjects, this.renderSubjects)}
            <button className='choice-select'
              onClick={this._onHandleClickTools}>{this.props.strings.moduleNav.tools}</button>
          </article>
        </main>
      </div>
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

  _onHandleSelectSubject = (subject) => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Subject: ${subject}`
    })
    browserHistory.push(`/subjects/${subject}`)
  }

  _onHandleClickTools = () => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Tools'
    })
    browserHistory.push('/tools')
  }
}

export default Subjects
