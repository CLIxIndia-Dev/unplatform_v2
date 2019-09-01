import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Breadcrumbs from '../../components/Breadcrumbs'
import PageFocusSection from '../../components/PageFocusSection'
import { log } from '../../utilities'

import '../../styles/buttons.css'

let backgroundImage = require('../../assets/clix-i2c-flowers.svg')
let backgroundCLIxImage=require('../../assets/clixlogo-website.svg')
let backgroundfooterImage=require('../../assets/Footer.svg')

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
        docTitle={`Interactive Tools | CLIx Interactives`}
        liveMessage='Select tools page loaded.'
        location={this.state.location}
        locale={this.props.locale}
      >
        <div className='gradient-wrapper'>
          <img src={backgroundImage} alt='' aria-hidden className='gradient-wrapper__image' />
          <img src={backgroundCLIxImage} alt='' aria-hidden className='gradient-wrapper__logoimage' />
          <Breadcrumbs
            hrefs={['/',
              '/subjects',
              '/tools']}
            breadcrumbTexts={[this.props.strings.breadcrumbs.selectUser,
              this.props.strings.breadcrumbs.selectSubject,
              this.props.strings.breadcrumbs.selectTool]}
            clickHandlers={[this._onHandleSelectUser,
              this._onHandleSelectSubject,
              this._onHandleSelectTools]}
          />
          <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_10_of_12 main-content'>
            <h1 className='pg-heading-1'>{this.props.strings.moduleNav.selectYourTool}</h1>
            <article className='choice-select__wrapper button-group' role='group'>
              {_.map(this.props.tools, this.renderTool)}
            </article>
          </main>
        </div>
        <img src={backgroundfooterImage} alt='' aria-hidden className='gradient-wrapper__footerimage' />
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
