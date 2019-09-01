import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Icon } from 'react-fa'
import ChevronRight from '../../../components/ChevronRight'
import PageFocusSection from '../../../components/PageFocusSection'

let backgroundImage = require('../../../assets/clix-i2c-flowers.svg')
let backgroundCLIxImage=require('../../../assets/clixlogo-website.svg')
let backgroundfooterImage=require('../../../assets/Footer.svg')

class HomeView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      englishUserSelectStrings: ['teacher', 'student', 'visitor', 'demonstration'],
      userSelectedItem: null,
      countSelectedItem: null,
      location: {
        pathname: '/',
        state: { setFocus: true }
      },
      focusedItem: null,
      focusedCount: null,
      username: null
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
    return (
      <label
        htmlFor={label}
        className={this.state.focusedItem === index
          ? 'user-select button-gradient-active' : 'user-select'}
        key={index}
      >
        <Icon
          name={this.state.userSelectedItem === label
            ? 'dot-circle-o' : 'circle-o'}
          className='user-select__radio-dot'
          aria-hidden
          role='img'
        />
        <input
          id={label}
          onChange={(e) => this._onHandleUserTypeSelect(e)}
          onFocus={() => this.focusItem(true, index)}
          type='radio'
          name='userType'
          value={label}
          checked={this.state.userSelectedItem === label}
          className='visuallyhidden'
          ref={(input) => { this.inputField = input }}
        />
        {label}
      </label>
    )
  }

  renderUserCountButtons = (label, index) => {
    let ariaLab = label === '1' ? 'user' : 'users'
    return (
      <label
        htmlFor={label}
        className={this.state.focusedCount === index
          ? 'count-num button-gradient-active' : 'count-num'}
        key={index}
        aria-label={`${label} ${ariaLab}`}
      >
        <Icon
          name={this.state.countSelectedItem === label
            ? 'dot-circle-o' : 'circle-o'}
          className='count-select__radio-dot'
          aria-hidden
          role='img'
        />
        <input
          onChange={(e) => this._onHandleUserCountSelect(e)}
          onFocus={() => this.focusCount(true, index)}
          type='radio'
          name='userCount'
          value={label}
          id={label}
          checked={this.state.countSelectedItem === label}
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
        <div>
          <fieldset className='count-select-form'>
            <legend>
              <h3 className='pg-heading-3'>{this.props.strings.splash.prompt}</h3>
            </legend>
            <article className='input-select__wrapper'>
              {_.map(['1', '2', '3', '3+'], this.renderUserCountButtons)}
            </article>
          </fieldset>
          <fieldset className='username-input-form'>
            <article className='username-input-form__wrapper'>
              <label
                htmlFor='studentIds'
                className='c-survey__form--label'>
                {this.props.strings.splash.usernameLabel}
              </label>
              <input
                id='studentIds'
                type='text'
                placeholder={this.props.strings.splash.usernamePlaceholder}
                value={this.state.username}
                className='c-survey__form--input'
                onChange={(e) => { this.setState({ username: e.target.value }) }}
              />
            </article>
          </fieldset>
        </div>
      )
    }

    let submitButton
    if (this.props.survey &&
        this.props.survey.userType &&
      (this.props.survey.userCount || this._getEnglishUserType() === 'demonstration')) {
      submitButton = (
        <button className='hi-but'
          onClick={() => this._onHandleSubmit()}
          >
          {this.props.strings.breadcrumbs.selectSubject}&nbsp;&nbsp;
          <ChevronRight /></button>
      )
    }

    return (
      <PageFocusSection
        docTitle={'Select User | CLIx Modules'}
        liveMessage='Select user page loaded.'
        location={this.state.location}
        locale={this.props.locale}
      >
        <div className='gradient-wrapper'>
          <img src={backgroundImage} alt='' aria-hidden className='gradient-wrapper__image' />
          <img src={backgroundCLIxImage} alt='' aria-hidden className='gradient-wrapper__logoimage' />
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
          <main
            role='main'
            aria-label='content'
            id='main'
            tabIndex='-1'
            className='span_11_of_12 main-content homeview__content' >
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
        <img src={backgroundfooterImage} alt='' aria-hidden className='gradient-wrapper__footerimage' />
      </PageFocusSection>
    )
  }

  _onHandleUserTypeSelect (e) {
    this.props.onUpdateSurvey({
      userType: e.currentTarget.value
    })
    this.setState({ userSelectedItem: e.currentTarget.value })
  }

  _onHandleUserCountSelect (e) {
    this.props.onUpdateSurvey({
      userType: this.props.survey.userType,
      userCount: e.currentTarget.value
    })
    this.setState({ countSelectedItem: e.currentTarget.value })
  }

  focusItem (shouldFocus, item) { // set currently-focused item
    if (shouldFocus) {
      this.setState({ focusedItem: item })
    } else {
      this.setState({ focusedItem: null })
    }
  }

  focusCount (shouldFocus, item) { // set currently-focused item
    if (shouldFocus) {
      this.setState({ focusedCount: item })
    } else {
      this.setState({ focusedCount: null })
    }
  }

  _onHandleSubmit () {
    this.props.onSetSurvey({
      userType: this._getEnglishUserType(),
      userCount: this.props.survey.userCount,
      username: this.state.username
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
