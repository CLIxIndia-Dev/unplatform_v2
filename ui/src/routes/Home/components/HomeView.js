'use strict'
import _ from 'lodash'
import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import {Icon} from 'react-fa'
import Radium from 'radium'
// import '../../../styles/core.css'

let backgroundImage = require('../../../assets/clix-i2c-flowers4.svg')

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column'
  },
  navWrapper: {
    flex: 1
  },
  title: {
    marginTop: '120px',
    fontFamily: 'open_sansbold',
    fontSize: '2.853rem',
    letterSpacing: '-0.009rem',
    textAlign: 'center'
  },
  subtitle: {
    marginTop: '1.063rem',
    fontSize: '1.606rem',
    lineHeight: '1.1',
    letterSpacing: '-0.005rem',
    textAlign: 'center'
  },
  buttonGroup: {
    margin: '44px auto 25px',
    textAlign: 'center'
  },
  button: {
    margin: '10px 10px',
    padding: '10px 30px',
    border: 'solid 0.094rem #ffffff',
    borderRadius: '100px',
    color: '#fff',
    fontFamily: 'open_sansregular',
    fontSize: '1.125rem',
    letterSpacing: '-0.006rem',
    textAlign: 'center',
    textShadow: '0 2px 2px rgba(0,0,0,0.3)'
  },
  userSelectButton: {
    minWidth: '185px',
    height: '50px'
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: -1
  },
  countWrapper: {
    marginTop: '15px'
  },
  submitButton: {
    marginTop: '50px'
  }
}


@Radium
class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      englishUserSelectStrings: ['teacher', 'student', 'visitor', 'demonstration']
    }
  }

  componentDidMount () {
    // flush the cache because we don't want modules
    // being cached forever...in case someone loads
    // new ones, we need to refresh the value in state
    console.log('home view mounting')
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
    let className = "user-select"
    let checked = false
    if (this.props.survey && this.props.survey.userType === label) {
      // className = "button-gradient-active"
      checked = true
    }
    return (
      <div className={className}>
      <label key={index}
        // style={[styles.button, styles.userSelectButton]}
        // className={className}
        // tabIndex={0}
        >
        <input key={index}
          onChange={(e) => this._onHandleUserTypeSelect(e)}
          type="radio"
          name="userType"
          value={label}
          // tabIndex={-1}
          checked={checked}
          className="user-select__input"
          ref={(input) => { this.inputField = input; }}
          />
        {label}
      </label>
      </div>
    )
  }

  renderUserCountButtons = (label, index) => {
    let className = "button-gradient"
    if (this.props.survey && this.props.survey.userCount === label) {
      className = "button-gradient-active"
    }
    return (
      <label key={index}
        className={className}
        // tabIndex={0}
        style={[styles.button, styles.userSelectButton]}>
        <input key={index}
          onChange={(e) => this._onHandleUserCountSelect(e)}
          type="radio"
          name="userCount"
          value={label}
          // tabIndex={-1}
          checked={this.props.survey.userCount === label}/>
          {label}
      </label>
    )
  }

  render() {
    if (!this.props.locale) {
      return (
        <div>
          <h1>Please set your school configuration at this <a href="/school">link</a>.</h1>
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
        <div style={styles.countWrapper}>
          <h3 className="count users-count">{this.props.strings.splash.prompt}</h3>
          <article className="count-select button-group">
            {_.map(['1', '2', '3', '3+'], this.renderUserCountButtons)}
          </article>
        </div>
      )
    }

    let submitButton

    if (this.props.survey &&
        this.props.survey.userType &&
      (this.props.survey.userCount || this._getEnglishUserType() === 'demonstration')) {
      submitButton = (
        <button className="hi-but"
          onClick={this._onHandleSubmit}
          style={[styles.button, styles.userSelectButton, styles.submitButton]}>
          {this.props.strings.breadcrumbs.selectSubject}&nbsp;&nbsp;
          <Icon name="chevron-right" aria-hidden={true}/></button>
      )
    }
    return (
      // <div style={styles.container} >
      <div>
        <img src={backgroundImage} alt="" style={styles.backgroundImage}/>

        <main className="span_10_of_12">
          <h1 className="pg-title">{this.props.strings.splash.title}</h1>
          <form action="" className="user-select-form">
            <fieldset>
              <legend>
                <h2 className="pg-subtitle">{this.props.strings.splash.subtitle}</h2>
              </legend>
              <article className="but-select">
                {_.map(this.userSelectStrings, this.renderUserTypeButtons)}
              </article>
            </fieldset>
          </form>
          {userCount}
          {submitButton}
        </main>
      </div>
    )
  }

  _onHandleUserTypeSelect = (e) => {
    console.log('updating survey')
    this.props.onUpdateSurvey({
      userType: e.currentTarget.value
    })
  }

  _onHandleUserCountSelect = (e) => {
    this.props.onUpdateSurvey({
      userType: this.props.survey.userType,
      userCount: e.currentTarget.value
    })
  }

  _onHandleSubmit = () => {
    this.props.onSetSurvey({
      userType: this._getEnglishUserType(),
      userCount: this.props.survey.userCount
    })
    browserHistory.push('/subjects')
  }
}

export default HomeView
