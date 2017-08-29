import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import BreadcrumbChevron from '../../components/BreadcrumbChevron'
import { log } from '../../utilities'

import '../../styles/components/c-breadcrumbs.css'
import '../../styles/buttons.css'

let backgroundImage = require('../../assets/clix-i2c-flowers.svg')

class Units extends Component {

  componentDidMount () {
    if (!this.props.sessionId) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps (nextProps) {

  }

  renderUnits = (unitName, index) => {
    return <button className='choice-select'
      onClick={() => this._onHandleSelectUnit(unitName)}>{unitName}</button>
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
                <BreadcrumbChevron />
                <a onClick={this._onHandleSelectUser} href='/'>{this.props.strings.breadcrumbs.selectUser}</a>
              </li>
              <li>
                <BreadcrumbChevron />
                <a onClick={this._onHandleSelectSubjects} href='/subjects'>{this.props.strings.breadcrumbs.selectSubject}</a>
              </li>
              <li>
                <BreadcrumbChevron />
                <a onClick={this._onHandleSelectGrades} href={`/subjects/${this.props.subjectName}`}>{this.props.strings.breadcrumbs.selectClass}</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className='span_10_of_12 main-content'>
          <h1 className='pg-title'>{this.props.strings.moduleNav.selectYourUnit}</h1>
          <article className='choice-select__wrapper button-group' role='group'>
            {_.map(this.props.units, this.renderUnits)}
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

  _onHandleSelectGrades = () => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select Grades'
    })
    browserHistory.push(`/subjects/${this.props.subjectName}`)
  }

  _onHandleSelectUnit = (unitName) => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Unit: ${unitName}`
    })
    browserHistory.push(`/subjects/${this.props.subjectName}/grades/${this.props.gradeName}/units/${unitName}`)
  }
}

export default Units
