import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Icon } from 'react-fa'

let backgroundImage = require('../../assets/clix-i2c-flowers4.svg')

import { log } from '../../utilities'

import '../../styles/components/c-breadcrumbs.css'
import '../../styles/buttons.css'

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
      <div className='gradient-wrapper' >
        <img src={backgroundImage} alt='' className='gradient-wrapper__image' />
        <header className='c-breadcrumbs__header'>
          <nav className='c-breadcrumbs__nav'>
            <ul className='c-breadcrumbs__list'>
              <li>
                <Icon name='chevron-left' className='pink-chev'
                  aria-hidden={true} />
                <a onClick={this._onHandleSelectUser}>{this.props.strings.breadcrumbs.selectUser}</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className='span_10_of_12'>
          <h1 className='pg-title'>{this.props.strings.moduleNav.selectYourSubject}</h1>
          <article className='subj-select button-group'>
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
