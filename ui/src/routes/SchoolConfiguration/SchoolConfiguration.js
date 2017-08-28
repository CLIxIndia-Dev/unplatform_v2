import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import '../../styles/components/c-schoolconfig.css'

class SchoolConfiguration extends Component {
  componentDidMount () {
    this.props.onGetSchoolConfiguration()
  }
  render () {
    let currentConfig = (
      <div>
        <strong>Current State / District: </strong> None / None
        <br />
        <strong>Current School / Terminal: </strong> None / None
        <br />
        <strong>Current Locale: </strong> None
      </div>
     )
    if (this.props.configuration) {
      currentConfig = (
        <div className='c-school__config-wrapper'>
          <h3>Current State / District: </h3>
          <p>
            {this.props.configuration.state} / {this.props.configuration.district}
          </p>
          <h3>Current School / Terminal: </h3>
          <p>
            {this.props.configuration.schoolId} / {this.props.configuration.terminalId}
          </p>
          <h3>Current Locale: </h3>
          <p>
            {this.props.configuration.locale}
          </p>
        </div>
      )
    }

    let districts = (
      <select id='district'
        value={this.props.form.district}
        onChange={this._onUpdateDistrict} />
    )

    if (this.props.form.state) {
      let options = {
        'Chhattisgarh':['Dhamteri', 'Bilaspur'],
        'Mizoram':['Aizawl'],
        'Rajasthan':['Baran', 'Jaipur', 'Jhalawar', 'Sirohi'],
        'Telangana':['Karimnagar', 'Warangal', 'RangaReddy']
      }
      districts = (
        <select id='district'
          value={this.props.form.district}
          onChange={this._onUpdateDistrict}>
          <option value='-1' />
          {_.map(options[this.props.form.state], (district) => {
            return <option value={district}>{district}</option>
          })}
        </select>
        )
    }

    return (
      <div className='c-school__wrapper'>
        <main className='c-school__main'>
          <header className='c-school__header'>
            <h1 className='c-school__heading' aria-label='Clix school configuration'>CLIx School Configuration</h1>
          </header>
          <section className='c-school__section'>
            <article className='c-school__curr-config'>
              <h2 className="c-school__config-header">Current Configuration</h2>
              {currentConfig}
            </article>
            <article className='c-school__new-config'>
              <h2 className="c-school__config-header">New Configuration</h2>
              <form action='' className='c-school__form'>
                <label htmlFor='state'>Select State</label>
                <select id='state'
                  value={this.props.form.state}
                  onChange={this._onUpdateState}>
                  <option value='None' />
                  <option value='Chhattisgarh'>Chhattisgarh</option>
                  <option value='Mizoram'>Mizoram</option>
                  <option value='Rajasthan'>Rajasthan</option>
                  <option value='Telangana'>Telangana</option>
                </select>
                <label htmlFor='district'>Select District</label>
                {districts}
                <label htmlFor='schoolId'>School ID</label>
                <input id='schoolId' type='text'
                  value={this.props.form.schoolId}
                  onChange={this._onUpdateSchoolId}
                />
                <label htmlFor='terminalId'>Terminal ID</label>
                <input id='terminalId' type='text'
                  value={this.props.form.terminalId}
                  onChange={this._onUpdateTerminalId}
                />
                <label htmlFor='locale'>Locale</label>
                <select id='locale'
                  value={this.props.form.locale}
                  onChange={this._onUpdateLocale}>
                  <option value='-1' />
                  <option value='en'>English</option>
                  <option value='hi'>Hindi</option>
                  <option value='te'>Telugu</option>
                </select>
                <button className='c-school__form-button' onClick={(e) => this._setSchoolConfiguration(e)}>Save</button>
              </form>
            </article>
          </section>
        </main>
      </div>
    )
  }

  _setSchoolConfiguration = (e) => {
    e.preventDefault()
    this.props.onSetSchoolConfiguration(this.props.form)
    browserHistory.push('/')
  }

  _onUpdateState = (e) => {
    this.props.onUpdateSchoolConfiguration({
      state: e.target.value,
      district: this.props.form ? this.props.form.district : null,
      locale: this.props.form ? this.props.form.locale : null,
      schoolId: this.props.form ? this.props.form.schoolId : null,
      terminalId: this.props.form ? this.props.form.terminalId : null
    })
  }

  _onUpdateDistrict = (e) => {
    this.props.onUpdateSchoolConfiguration({
      state: this.props.form.state,
      district: e.target.value,
      locale: this.props.form ? this.props.form.locale : null,
      schoolId: this.props.form ? this.props.form.schoolId : null,
      terminalId: this.props.form ? this.props.form.terminalId : null
    })
  }

  _onUpdateLocale = (e) => {
    this.props.onUpdateSchoolConfiguration({
      state: this.props.form ? this.props.form.state : null,
      district: this.props.form ? this.props.form.district : null,
      locale: e.target.value,
      schoolId: this.props.form ? this.props.form.schoolId : null,
      terminalId: this.props.form ? this.props.form.terminalId : null
    })
  }

  _onUpdateSchoolId = (e) => {
    this.props.onUpdateSchoolConfiguration({
      state: this.props.form ? this.props.form.state : null,
      district: this.props.form ? this.props.form.district : null,
      locale: this.props.form ? this.props.form.locale : null,
      schoolId: e.target.value,
      terminalId: this.props.form ? this.props.form.terminalId : null
    })
  }

  _onUpdateTerminalId = (e) => {
    this.props.onUpdateSchoolConfiguration({
      state: this.props.form ? this.props.form.state : null,
      district: this.props.form ? this.props.form.district : null,
      locale: this.props.form ? this.props.form.locale : null,
      schoolId: this.props.form ? this.props.form.schoolId : null,
      terminalId: e.target.value
    })
  }
}

export default SchoolConfiguration
