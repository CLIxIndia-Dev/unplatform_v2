import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Icon } from 'react-fa'
import BreadcrumbChevron from '../../components/BreadcrumbChevron'
import PageFocusSection from '../../components/PageFocusSection'
import LessonModal from '../../components/LessonModal'
import { log } from '../../utilities'

import '../../styles/components/c-header.css'
import '../../styles/components/c-activity.css'
import '../../styles/components/c-modal.css'

let backgroundImage = require('../../assets/clix-i2c-flowers.svg')

class Tool extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      location: {
        pathname: `/tools/${this.props.toolName}`,
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

  renderSubtool = (subtool, index) => {
    return <button className='choice-select'
      onClick={() => this._onHandleSelectSubtool(subtool)}>{subtool}</button>
  }

  render () {
    if (!this.props.locale) {
      return (
        <div>
          <h1>Please set your school configuration at this <a href='/school'>link</a>.</h1>
        </div>
      )
    }

    if (_.keys(this.props.subtools).length > 0) {
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
                      href='/tools'>
                      {this.props.strings.breadcrumbs.selectTool}
                    </a>
                  </li>
                  <li>
                    <BreadcrumbChevron />
                    <a onClick={this._onHandleSelectSubtools}
                      href={`/tools/${this.props.toolName}`} aria-current='page'>
                      {this.props.strings.breadcrumbs.selectSubtool}
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
            <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_10_of_12 main-content'>
              <h1 className='pg-heading-1'>{this.props.strings.moduleNav.selectYourSubtool}</h1>
              <article className='choice-select__wrapper button-group' role='group'>
                {_.map(this.props.subtools, this.renderSubtool)}
              </article>
            </main>
          </div>
        </PageFocusSection>
      )
    }

    let toolUrl = `/common/${this.props.toolName}?lang=${this.props.locale}`
    return (
      <PageFocusSection
        docTitle={`${this.props.toolName} | Clix Modules`}
        liveMessage='Select tool page loaded.'
        location={this.state.location}
        locale={this.props.locale}
      >
        <div className='act-container'>
          <header role='banner' id='global-nav' tabIndex='-1' className='c-header'>
            <h1 className='c-header__logo'>CLIx Connected Learning Initiative</h1>
            <p className='c-header--unplat-v'>unplatform version {this.props.version}</p>
            <nav className='c-header__nav'>
              <a href='/tools'
                onClick={this._onChooseTool}>
                {this.props.strings.unplatformNav.chooseTool}</a>
              <a href='/subjects'
                onClick={this._onSelectSubject}>
                {this.props.strings.breadcrumbs.selectSubject}</a>
              <button
                onClick={this._onToggleModal}>
                {this.props.strings.unplatformNav.finishLesson}</button>
            </nav>
          </header>
          <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_12_of_12'>
            <iframe src={toolUrl}
              title={this.props.toolName}
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

  _onHandleSelectTools = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select Tools'
    })
    browserHistory.push(`/tools/`)
  }

  _onHandleSelectSubtools = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select Subtools'
    })
    browserHistory.push(`/tools/${this.props.toolName}`)
  }

  _onHandleSelectSubtool = (subtool) => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Select subtool: ${subtool}`
    })
    browserHistory.push(`/tools/${this.props.toolName}/${subtool}`)
  }

  _onChooseTool = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      appName: 'unplatform',
      action: 'clicked_choose_tool',
      params: {
        url: `/tools/${this.props.toolName}`
      }
    })
    browserHistory.push('/tools')
  }

  _onSelectSubject = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      appName: 'unplatform',
      action: 'clicked_select_subject',
      params: {
        url: `/tools/${this.props.toolName}`
      }
    })
    browserHistory.push('/subjects')
  }

  _onToggleModal = (e) => {
    e.preventDefault()
    this.setState({ showModal: !this.state.showModal })
  }
}

Tool.propTypes = {
  strings     : React.PropTypes.object,
  locale      : React.PropTypes.string,
  sessionId   : React.PropTypes.string,
  version     : React.PropTypes.string,
  toolName    : React.PropTypes.string,
  subtools    : React.PropTypes.object
}

export default Tool
