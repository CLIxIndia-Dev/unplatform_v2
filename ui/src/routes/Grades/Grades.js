import _ from 'lodash'
import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import Radium from 'radium'
import {Icon} from 'react-fa'

let backgroundImage = require('../../assets/clix-i2c-flowers4.svg')

import {log} from '../../utilities'

import '../../styles/core.css'
import '../../styles/buttons.css'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
  },
  navWrapper: {
    flex: 1
  },
  section: {
    flex: 50,
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontWeight: 'bold',
    marginRight: '15px',
    marginBottom: '15px',
    flex: 2
  },
  formRow: {
    display: 'flex',
    width: '400px',
    margin: '5px 5px'
  },
  value: {
    flex: 2
  },
  navTitle: {
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: -1
  },
  header: {
    position: 'relative',
    margin: '30px auto 0px',
    zIndex: 10,
    width: '100%'
  },
  nav: {
    width: '100%'
  }
}

@Radium
class Grades extends Component {

  componentDidMount () {
    console.log('session id in grades', this.props.sessionId)
    if (!this.props.sessionId) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {

  }

  renderGrades = (gradeName, index) => {
    return <button className="choice-select"
      onClick={() => this._onHandleSelectGrade(gradeName)}>{gradeName}</button>
  }

  render() {
    if (!this.props.locale) {
      return (
        <div>
          <h1>Please set your school configuration at this <a href="/school">link</a>.</h1>
        </div>
      )
    }

    return (
      <div style={styles.container} >
        <img src={backgroundImage} alt="" style={styles.backgroundImage}/>
        <header style={styles.header}>
          <nav style={styles.nav}>
            <ul className="breadcrumbs">
              <li>
                <Icon name="chevron-left" className="pink-chev"
                  aria-hidden={true} />
                <a onClick={this._onHandleSelectUser}>{this.props.strings.breadcrumbs.selectUser}</a>
              </li>
              <li>
                <Icon name="chevron-left" className="pink-chev"
                  aria-hidden={true} />
                <a onClick={this._onHandleSelectSubjects}>{this.props.strings.breadcrumbs.selectSubject}</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="span_10_of_12">
          <h1 className="pg-title">{this.props.strings.moduleNav.selectYourClass}</h1>
          <h2 className="pg-subtitle"></h2>
          <article className="subj-select button-group">
            {_.map(this.props.grades, this.renderGrades)}
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

  _onHandleSelectSubjects = () => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Select Subjects`
    })
    browserHistory.push(`/subjects`)
  }

  _onHandleSelectGrade = (gradeName) => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: `Grade: ${gradeName}`
    })
    browserHistory.push(`/subjects/${this.props.subjectName}/grades/${gradeName}`)
  }
}

export default Grades
