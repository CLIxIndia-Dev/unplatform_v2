import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import BreadcrumbChevron from '../../components/BreadcrumbChevron'
import { log } from '../../utilities'

import '../../styles/components/c-breadcrumbs.css'
import '../../styles/buttons.css'

let backgroundImage = require('../../assets/clix-i2c-flowers.svg')

class Subjects extends Component {

  componentDidMount () {
    if (!this.props.sessionId) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('receiving new props')
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

    console.log('tools', this.props.tools)
    return (
      <div className='gradient-wrapper'>
        <img src={backgroundImage} alt='' className='gradient-wrapper__image' />
        <header className='c-breadcrumbs__header'>
          <nav className='c-breadcrumbs__nav'>
            <ul className='c-breadcrumbs__list'>
              <li>
                <BreadcrumbChevron />
                <a onClick={this._onHandleSelectUser}>{this.props.strings.breadcrumbs.selectUser}</a>
              </li>
              <li>
                <BreadcrumbChevron />
                <a onClick={this._onHandleSelectSubject}>{this.props.strings.breadcrumbs.selectSubject}</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className='span_10_of_12 main-content'>
          <h1 className='pg-title'>{this.props.strings.moduleNav.selectYourTool}</h1>
          <article className='choice-select__wrapper button-group'>
            {_.map(this.props.tools, this.renderTool)}
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

  _onHandleSelectSubject = () => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select Subject'
    })
    browserHistory.push(`/subjects`)
  }

  _onHandleSelectTool = (tool) => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Select tool: ${tool}`
    })
    browserHistory.push(`/tools/${tool}`)
  }
}

export default Subjects
