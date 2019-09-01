import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import PageFocusSection from '../../components/PageFocusSection'
import Breadcrumbs from '../../components/Breadcrumbs'
import { log } from '../../utilities'

let backgroundImage = require('../../assets/clix-i2c-flowers.svg')
let backgroundCLIxImage=require('../../assets/clixlogo-website.svg')
let backgroundfooterImage=require('../../assets/Footer.svg')


class Subjects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: {
        pathname: '/subjects',
        state: { setFocus: true }
      }
    }
  }

  componentDidMount () {
    if (!this.props.sessionId && !this.props.isSetSurveyInProgress) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps (nextProps) {
  }

  renderSubjects = (subjectName, index) => {
    if (subjectName !== 'Tools') {
      return <button className='choice-select'
        onClick={() => this._onHandleSelectSubject(subjectName)}>{_.truncate(subjectName, 40)}</button>
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
      <PageFocusSection
        docTitle='Select Module | CLIx Modules'
        liveMessage='Select subject page loaded.'
        location={this.state.location}
        locale={this.props.locale}
      >
        <div className='gradient-wrapper'>
          <img src={backgroundImage} alt='' aria-hidden className='gradient-wrapper__image' />
          <img src={backgroundCLIxImage} alt='' aria-hidden className='gradient-wrapper__logoimage' />
          <Breadcrumbs
            hrefs={['/', '/subjects']}
            breadcrumbTexts={[this.props.strings.breadcrumbs.selectUser, this.props.strings.breadcrumbs.selectSubject]}
            clickHandlers={[this._onHandleSelectUser, this._onHandleSelectSubjects]} />
          <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_10_of_12 main-content'>
            <h1 className='pg-heading-1'>{this.props.strings.moduleNav.selectYourSubject}</h1>
            <article className='choice-select__wrapper button-group' role='group'>
              {_.map(this.props.subjects, this.renderSubjects)}
              <button className='choice-select'
                onClick={this._onHandleClickTools}>{this.props.strings.moduleNav.tools}</button>
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

  _onHandleSelectSubject = (subject) => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Subject: ${subject}`
    })
    browserHistory.push(`/subjects/${subject}`)
  }

  _onHandleClickTools = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Interactive Tools'
    })
    browserHistory.push('/tools')
  }
}

Subjects.propTypes = {
  subjects              : React.PropTypes.object,
  strings               : React.PropTypes.object,
  locale                : React.PropTypes.string,
  sessionId             : React.PropTypes.string,
  isSetSurveyInProgress : React.PropTypes.bool
}

export default Subjects
