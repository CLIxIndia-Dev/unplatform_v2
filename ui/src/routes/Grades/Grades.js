import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Icon } from 'react-fa'
import { log } from '../../utilities'

import '../../styles/components/c-breadcrumbs.css'
import '../../styles/buttons.css'

let backgroundImage = require('../../assets/clix-i2c-flowers4.svg')

class Grades extends Component {

  componentDidMount () {
    console.log('session id in grades', this.props.sessionId)
    if (!this.props.sessionId) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps (nextProps) {

  }

  renderGrades = (gradeName, index) => {
    return <button className='choice-select'
      onClick={() => this._onHandleSelectGrade(gradeName)}>{gradeName}</button>
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
                <Icon name='chevron-left' className='pink-chev'
                  aria-hidden={true} />
                <a onClick={this._onHandleSelectUser}>{this.props.strings.breadcrumbs.selectUser}</a>
              </li>
              <li>
                <Icon name='chevron-left' className='pink-chev'
                  aria-hidden={true} />
                <a onClick={this._onHandleSelectSubjects}>{this.props.strings.breadcrumbs.selectSubject}</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className='span_10_of_12 main-content'>
          <h1 className='pg-title'>{this.props.strings.moduleNav.selectYourClass}</h1>
          <article className='choice-select__wrapper button-group'>
            {_.map(this.props.grades, this.renderGrades)}
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

  _onHandleSelectSubjects = () => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Select Subjects`
    })
    browserHistory.push(`/subjects`)
  }

  _onHandleSelectGrade = (gradeName) => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Grade: ${gradeName}`
    })
    browserHistory.push(`/subjects/${this.props.subjectName}/grades/${gradeName}`)
  }
}

export default Grades
