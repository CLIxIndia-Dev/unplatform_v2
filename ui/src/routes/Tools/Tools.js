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

class Tools extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: {
        pathname: '/tools/',
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

    return (
      <PageFocusSection
        docTitle={`Tools | Clix Modules`}
        liveMessage='Select tools page loaded.'
        location={this.state.location}
        locale={this.props.locale}
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
                  <a onClick={this._onHandleSelectSubject}
                    href='/subjects'>
                    {this.props.strings.breadcrumbs.selectSubject}
                  </a>
                </li>
                <li>
                  <BreadcrumbChevron />
                  <a onClick={this._onHandleSelectTools}
                    href='/tools' aria-current='page'>
                    {this.props.strings.breadcrumbs.selectTool}
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_10_of_12 main-content'>
            <h1 className='pg-heading-1'>{this.props.strings.moduleNav.selectYourTool}</h1>
            <article className='choice-select__wrapper button-group' role='group'>
              {_.map(this.props.tools, this.renderTool)}
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

  _onHandleSelectSubject = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select Subject'
    })
    browserHistory.push(`/subjects`)
  }

  _onHandleSelectTools = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select Tools'
    })
    browserHistory.push(`/tools/`)
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

Tools.propTypes = {
  strings     : React.PropTypes.object,
  locale      : React.PropTypes.string,
  sessionId   : React.PropTypes.string,
  tools       : React.PropTypes.object
}

export default Tools
