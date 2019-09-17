import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Breadcrumbs from '../../components/Breadcrumbs'
import PageFocusSection from '../../components/PageFocusSection'
import LessonModal from '../../components/LessonModal'
import { log } from '../../utilities'

import '../../styles/components/c-header.css'
import '../../styles/components/c-activity.css'
import '../../styles/components/c-modal.css'

let backgroundImage = require('../../assets/clix-i2c-flowers.svg')
let backgroundCLIxImage=require('../../assets/clixlogo-website.svg')
let backgroundfooterImage=require('../../assets/Footer.svg')

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
          docTitle={`Tools | CLIx Interactives`}
          liveMessage='Select tools page loaded.'
          location={this.state.location}
          locale={this.props.locale}
        >
          <div className='gradient-wrapper'>
            <img src={backgroundImage} alt='' aria-hidden className='gradient-wrapper__image' />
            <a href="https://clix.tiss.edu" target="_blank">
            <img src={backgroundCLIxImage} alt='' aria-hidden className='gradient-wrapper__logoimage' />
            </a>
            <Breadcrumbs
              hrefs={['/',
                '/subjects',
                '/tools',
                `/tools/${this.props.toolName}`]}
              breadcrumbTexts={[this.props.strings.breadcrumbs.selectUser,
                this.props.strings.breadcrumbs.selectSubject,
                this.props.strings.breadcrumbs.selectTool,
                this.props.strings.breadcrumbs.selectSubtool]}
              clickHandlers={[this._onHandleSelectUser,
                this._onHandleSelectSubject,
                this._onHandleSelectTools,
                this._onHandleSelectSubtools]}
            />
            <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_10_of_12 main-content'>
              <h1 className='pg-heading-1'>{this.props.strings.moduleNav.selectYourSubtool}: {this.props.toolName}</h1>
              <article className='choice-select__wrapper button-group' role='group'>
                {_.map(this.props.subtools, this.renderSubtool)}
              </article>
            </main>
          </div>
          <a href="https://clixoer.tiss.edu" target="_blank">
          <img src={backgroundfooterImage} alt='' aria-hidden className='gradient-wrapper__footerimage' />
          </a>
        </PageFocusSection>
      )
    }

    let toolUrl = `/common/${this.props.toolName}?lang=${this.props.locale}`
    return (
      <PageFocusSection
        docTitle={`${this.props.toolName} | CLIx Interactives`}
        liveMessage='Select tool page loaded.'
        location={this.state.location}
        locale={this.props.locale}
      >
        <div className='act-container'>
          <header role='banner' id='global-nav' tabIndex='-1' className='c-header'>
            <h1 className='c-header__logo'>CLIx Connected Learning Initiative</h1>
            <div className='c-header__nav-wrapper'>
              <p className='c-header__unplat-v'>unplatform version {this.props.version}</p>
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
            </div>
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
        <a href="https://clixoer.tiss.edu" target="_blank">
        <img src={backgroundfooterImage} alt='' aria-hidden className='gradient-wrapper__footerimage' />
        </a>
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
      target: 'Select Module'
    })
    browserHistory.push(`/subjects`)
  }

  _onHandleSelectTools = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select Interactive Tools'
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
