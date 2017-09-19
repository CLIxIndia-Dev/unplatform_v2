import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Icon } from 'react-fa'
import ChevronRight from '../../../components/ChevronRight'
import PageFocusSection from '../../../components/PageFocusSection'

let backgroundImage = require('../../../assets/clix-i2c-flowers.svg')

class HomeView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      englishUserSelectStrings: ['teacher', 'student', 'visitor', 'demonstration'],
      userFocusedIndex: null,
      countFocusedIndex: null,
      skiplinks: [{
        link: '#global-nav',
        text: 'Skip to navigation'
      },
      {
        link: '#main',
        text: 'Skip to main content'
      }],
      location: {
        pathname: '/',
        state: { setFocus: true }
      }
    }
  }

  componentDidMount () {
    // flush the cache because we don't want modules
    // being cached forever...in case someone loads
    // new ones, we need to refresh the value in state
    this.props.onFlush()
    this.props.onGetConfiguration()
    this.props.onGetModules()
  }

  componentDidUpdate (prevProps, prevState) {
    if (!this.props.modules) {
      this.props.onGetModules()
    }
    if (!this.props.locale && !this.props.hasConfiguration) {
      this.props.onGetConfiguration()
    }
  }

  // This seems horrible
  _getEnglishUserType = () => {
    // find by index
    let matchIndex = this.userSelectStrings.indexOf(this.props.survey.userType)
    if (matchIndex >= 0) {
      return this.state.englishUserSelectStrings[matchIndex]
    } else {
      return null
    }
  }

  renderUserTypeButtons = (label, index) => {
    let checked = false
    if (this.props.survey && this.props.survey.userType === label) {
      checked = true
    }

    return (
      <label
        htmlFor={label}
        className={index === this.state.userFocusedIndex
          ? 'user-select button-gradient-active' : 'user-select'}
        key={index}
      >
        <Icon
          name={index === this.state.userFocusedIndex
            ? 'dot-circle-o' : 'circle-o'}
          className='user-select__radio-dot'
          aria-hidden
          role='img'
        />
        <input
          id={label}
          onChange={(e) => this._onHandleUserTypeSelect(e)}
          onFocus={() => this._onHandleUserTypeFocus(index)}
          type='radio'
          name='userType'
          value={label}
          checked={checked}
          className='user-select__input visuallyhidden'
          ref={(input) => { this.inputField = input }}
        />
        {label}
      </label>
    )
  }

  renderUserCountButtons = (label, index) => {
    let checked = false
    let ariaLab = label === '1' ? 'user' : 'users'
    if (this.props.survey && this.props.survey.userCount === label) {
      checked = true
    }

    return (
      <label
        htmlFor={label}
        className={
          index === this.state.countFocusedIndex
          ? 'count-num button-gradient-active' : 'count-num'}
        key={index}
        aria-label={`${label} ${ariaLab}`}
      >
        <Icon
          name={index === this.state.countFocusedIndex
            ? 'dot-circle-o' : 'circle-o'}
          className='count-select__radio-dot'
          aria-hidden
          role='img'
        />
        <input
          onChange={(e) => this._onHandleUserCountSelect(e)}
          onFocus={() => this._onHandleUserCountFocus(index)}
          type='radio'
          name='userCount'
          value={label}
          id={label}
          checked={checked}
          className='visuallyhidden'
        />
        {label}
      </label>
    )
  }

  render () {
    if (!this.props.locale) {
      return (
        <div>
          <h1>Please set your school configuration at this <a href='/school'>link</a>.</h1>
        </div>
      )
    }

    this.userSelectStrings = [this.props.strings.splash.teacher,
      this.props.strings.splash.student,
      this.props.strings.splash.visitor,
      this.props.strings.splash.demonstration]

    let userCount
    if (this.props.survey && this.props.survey.userType && this._getEnglishUserType() !== 'demonstration') {
      userCount = (
        <fieldset className='count-select-form'>
          <legend>
            <h3 className='pg-heading-3'>{this.props.strings.splash.prompt}</h3>
          </legend>
          <article className='input-select__wrapper'>
            {_.map(['1', '2', '3', '3+'], this.renderUserCountButtons)}
          </article>
        </fieldset>
      )
    }

    let submitButton
    if (this.props.survey &&
        this.props.survey.userType &&
      (this.props.survey.userCount || this._getEnglishUserType() === 'demonstration')) {
      submitButton = (
        <button className='hi-but'
          onClick={this._onHandleSubmit}
          >
          {this.props.strings.breadcrumbs.selectSubject}&nbsp;&nbsp;
          <ChevronRight /></button>
      )
    }

    return (
      <PageFocusSection
        docTitle={'Select User | Clix Modules'}
        liveMessage='Select user page loaded.'
        location={this.state.location}
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
                    href='/'
                    aria-current='page'>
                    {this.props.strings.breadcrumbs.selectUser}
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main role='main' aria-label='content' id='main' tabIndex='-1' className='span_11_of_12 main-content homeview__content' >
            <h1 className='pg-heading-1'>
              <span aria-hidden>{this.props.strings.splash.title}</span>
              <span className='visuallyhidden'>{this.props.strings.splash.ariaLabelTitle}</span>
            </h1>
            <form action=''>
              <fieldset className='user-select-form'>
                <legend>
                  <h2 className='pg-heading-2'>{this.props.strings.splash.subtitle}</h2>
                </legend>
                <article className='input-select__wrapper' tabIndex='-1'>
                  {_.map(this.userSelectStrings, this.renderUserTypeButtons)}
                </article>
              </fieldset>
              {userCount}
            </form>
            {submitButton}
          </main>
        </div>
      </PageFocusSection>
    )
  }

  _onHandleUserTypeSelect = (e) => {
    this.props.onUpdateSurvey({
      userType: e.currentTarget.value
    })
  }

  _onHandleUserTypeFocus = (index) => {
    this.setState({ userFocusedIndex: index })
  }

  _onHandleUserCountSelect = (e) => {
    this.props.onUpdateSurvey({
      userType: this.props.survey.userType,
      userCount: e.currentTarget.value
    })
  }

  _onHandleUserCountFocus = (index) => {
    this.setState({ countFocusedIndex: index })
  }

  _onHandleSubmit = () => {
    this.props.onSetSurvey({
      userType: this._getEnglishUserType(),
      userCount: this.props.survey.userCount
    })
    browserHistory.push('/subjects')
  }
}

HomeView.propTypes = {
  onFlush            : React.PropTypes.func,
  onGetConfiguration : React.PropTypes.func,
  onGetModules       : React.PropTypes.func,
  onUpdateSurvey     : React.PropTypes.func,
  onSetSurvey        : React.PropTypes.func,
  modules            : React.PropTypes.object,
  strings            : React.PropTypes.object,
  survey             : React.PropTypes.object,
  locale             : React.PropTypes.string,
  hasConfiguration   : React.PropTypes.bool
}

export default HomeView
