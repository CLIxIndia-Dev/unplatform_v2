import _ from 'lodash'
import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import Radium from 'radium'
import {Icon} from 'react-fa'

let backgroundImage = require('../../assets/clix-i2c-flowers4.svg')

import {log} from '../../utilities'

import '../../styles/components/c-breadcrumbs.css'
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
class Subjects extends Component {

  componentDidMount () {
    if (!this.props.sessionId) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('receiving new props')
  }

  renderTool = (tool, index) => {
    return <button className="choice-select"
      onClick={() => this._onHandleSelectTool(tool)}>{tool}</button>
  }

  render() {

    if (!this.props.locale) {
      return (
        <div>
          <h1>Please set your school configuration at this <a href="/school">link</a>.</h1>
        </div>
      )
    }

    console.log('tools', this.props.tools)
    return (
      <div className='gradient-wrapper' style={styles.container} >
        <img src={backgroundImage} alt="" className='gradient-wrapper__image' style={styles.backgroundImage}/>
        <header style={styles.header}>
          <nav style={styles.nav}>
            <ul className="c-breadcrumbs__list">
              <li>
                <Icon name="chevron-left" className="pink-chev"
                  aria-hidden={true} />
                <a onClick={this._onHandleSelectUser}>{this.props.strings.breadcrumbs.selectUser}</a>
              </li>
              <li>
                <Icon name="chevron-left" className="pink-chev"
                  aria-hidden={true} />
                <a onClick={this._onHandleSelectSubject}>{this.props.strings.breadcrumbs.selectSubject}</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="span_10_of_12">
          <h1 className="pg-title">{this.props.strings.moduleNav.selectYourSubject}</h1>
          <h2 className="pg-subtitle"></h2>
          <article className="subj-select button-group">
            {_.map(this.props.tools, this.renderTool)}
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

  _onHandleSelectSubject = () => {
    log({
      sessionId: this.props.sessionId,
      action: 'click',
      target: 'Select Subject'
    })
    browserHistory.push(`/subjects`)
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

export default Subjects
