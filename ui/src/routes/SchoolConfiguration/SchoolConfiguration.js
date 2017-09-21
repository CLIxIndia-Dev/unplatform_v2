import _ from 'lodash'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import DocumentTitle from 'react-document-title'
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
      <div className='c-school__form--district-select'>
        <label
          htmlFor='district'
          className='c-school__form--label-disabled'>
          Select District
          <span> (required)</span>
        </label>
        <select id='district' disabled />
      </div>
    )

    if (this.props.form.state) {
      let options = {
        'Chhattisgarh':['Dhamteri', 'Bilaspur'],
        'Mizoram':['Aizawl'],
        'Rajasthan':['Baran', 'Jaipur', 'Jhalawar', 'Sirohi'],
        'Telangana':['Karimnagar', 'Warangal', 'RangaReddy']
      }
      districts = (
        <div className='c-school__form--district-select'>
          <label
            htmlFor='district'
            className='c-school__form--label'>
            Select District
            <span> (required)</span>
          </label>
          <select id='district'
            value={this.props.form.district}
            onChange={this._onUpdateDistrict}
            aria-required>
            <option value='-1' />
            {_.map(options[this.props.form.state], (district) => {
              return <option value={district}>{district}</option>
            })}
          </select>
        </div>
        )
    }

    // check if form is filled out, disable button if not
    const formVals = Object.values(this.props.form)
    const formFilled = formVals.every(formVal => (formVal !== null) && (formVal !== ''))
    const buttonRegion = !formFilled
      ? (<div className='c-school__form-button-region'>
        <button disabled className='c-school__form-button'>Save</button>
        <span>Please fill in all form fields</span>
      </div>)
      : (<button className='c-school__form-button' onClick={(e) => this._setSchoolConfiguration(e)}>Save</button>)

    return (
      <DocumentTitle title='Clix School Configuration | Clix Modules'>
        <div className='c-school__wrapper'>
          <main className='c-school__main' aria-label='content'>
            <header className='c-school__header'>
              <h1 className='c-school__heading' aria-label='Clix school configuration'>CLIx School Configuration</h1>
            </header>
            <section className='c-school__section'>
              <article className='c-school__curr-config'>
                <h2 className='c-school__config-header'>Current Configuration</h2>
                {currentConfig}
              </article>
              <article className='c-school__new-config'>
                <h2 className='c-school__config-header'>New Configuration</h2>
                <form action='' className='c-school__form'>
                  <label
                    htmlFor='state'
                    className='c-school__form--label'>
                    Select State
                    <span> (required)</span>
                  </label>
                  <select id='state'
                    value={this.props.form.state}
                    onChange={this._onUpdateState}
                    aria-required>
                    <option value='None' />
                    <option value='Chhattisgarh'>Chhattisgarh</option>
                    <option value='Mizoram'>Mizoram</option>
                    <option value='Rajasthan'>Rajasthan</option>
                    <option value='Telangana'>Telangana</option>
                  </select>
                  {districts}
                  <label
                    htmlFor='schoolId'
                    className='c-school__form--label'>
                    School ID
                    <span> (required)</span>
                  </label>
                  <input id='schoolId' type='text'
                    value={this.props.form.schoolId}
                    onChange={this._onUpdateSchoolId}
                    aria-required
                  />
                  <label
                    htmlFor='terminalId'
                    className='c-school__form--label'>
                    Terminal ID
                    <span> (required)</span>
                  </label>
                  <input id='terminalId' type='text'
                    value={this.props.form.terminalId}
                    onChange={this._onUpdateTerminalId}
                    aria-required
                  />
                  <label
                    htmlFor='locale'
                    className='c-school__form--label'>
                    Locale
                    <span> (required)</span>
                  </label>
                  <select id='locale'
                    value={this.props.form.locale}
                    onChange={this._onUpdateLocale}
                    aria-required>
                    <option value='en'>English</option>
                    <option value='hi'>Hindi</option>
                    <option value='te'>Telugu</option>
                  </select>
                  {buttonRegion}
                </form>
              </article>
            </section>
          </main>
        </div>
      </DocumentTitle>
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

SchoolConfiguration.propTypes = {
  onGetSchoolConfiguration    : React.PropTypes.func,
  onSetSchoolConfiguration    : React.PropTypes.func,
  onUpdateSchoolConfiguration : React.PropTypes.func,
  configuration               : React.PropTypes.object,
  form                        : React.PropTypes.object
}

export default SchoolConfiguration
