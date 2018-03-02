import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Breadcrumbs from '../../components/Breadcrumbs'
import PageFocusSection from '../../components/PageFocusSection'
import { log } from '../../utilities'

import '../../styles/buttons.css'

let backgroundImage = require('../../assets/clix-i2c-flowers.svg')

class Units extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: {
        pathname: `/subjects/${this.props.subjectName}`,
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

  renderUnits = (unitName, index) => {
    return <button className='choice-select'
      onClick={() => this._onHandleSelectUnit(unitName)}>{_.truncate(unitName, 40)}</button>
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
        docTitle={`${this.props.subjectName} | Clix Modules`}
        liveMessage='Select unit page loaded.'
        location={this.state.location}
        locale={this.props.locale}
      >
        <div className='gradient-wrapper' >
          <img src={backgroundImage} alt='' aria-hidden className='gradient-wrapper__image' />
          <Breadcrumbs
            hrefs={['/',
              '/subjects',
              `/subjects/${this.props.subjectName}`]}
            breadcrumbTexts={[this.props.strings.breadcrumbs.selectUser,
              this.props.strings.breadcrumbs.selectSubject,
              this.props.strings.breadcrumbs.selectUnit]}
            clickHandlers={[this._onHandleSelectUser,
              this._onHandleSelectSubjects,
              this._onHandleSelectUnits]}
          />
          <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_10_of_12 main-content'>
            <h1 className='pg-heading-1'>{this.props.strings.moduleNav.selectYourUnit}</h1>
            <article className='choice-select__wrapper button-group' role='group'>
              {_.map(this.props.units, this.renderUnits)}
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

  _onHandleSelectSubjects = (e) => {
    e.preventDefault()
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Select Subjects`
    })
    browserHistory.push(`/subjects`)
  }

  _onHandleSelectUnit = (unitName) => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Unit: ${unitName}`
    })
    browserHistory.push(`/subjects/${this.props.subjectName}/units/${unitName}`)
  }
}

Units.propTypes = {
  units       : React.PropTypes.object,
  strings     : React.PropTypes.object,
  subjectName : React.PropTypes.string,
  locale      : React.PropTypes.string,
  sessionId   : React.PropTypes.string
}

export default Units
