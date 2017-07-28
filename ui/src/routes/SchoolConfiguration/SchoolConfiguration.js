import React, {Component} from 'react'
import { browserHistory } from 'react-router'

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
  }
}

class SchoolConfiguration extends Component {
  componentDidMount () {
    this.props.onGetSchoolConfiguration()
  }
  render() {

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
        <div>
          <div style={styles.formRow}>
            <div style={styles.label}>Current State / District: </div>
            <span style={styles.value}>
              {this.props.configuration.state} / {this.props.configuration.district}
            </span>
          </div>
          <div style={styles.formRow}>
            <div style={styles.label}>Current School / Terminal: </div>
            <span style={styles.value}>
              {this.props.configuration.schoolId} / {this.props.configuration.terminalId}
            </span>
          </div>
          <div style={styles.formRow}>
            <div style={styles.label}>Current Locale: </div>
            <span style={styles.value}>
              {this.props.configuration.locale}
            </span>
          </div>
        </div>
      )
    }

    let districts = (
      <select id="district"
        value={this.props.form.district}
        style={styles.value}
        onChange={this._onUpdateDistrict}>
      </select>
    )

    if (this.props.form.state) {
      let options = {
	    	"Chhattisgarh":["Dhamteri","Bilaspur"],
	    	"Mizoram":["Aizawl"],
	    	"Rajasthan":["Baran", "Jaipur", "Jhalawar", "Sirohi"],
	    	"Telangana":["Karimnagar","Warangal","RangaReddy"]
	    }
      districts = (
        <select id="district"
          value={this.props.form.district}
          style={styles.value}
          onChange={this._onUpdateDistrict}>
            <option value="-1"></option>
            {_.map(options[this.props.form.state], (district) => {
              return <option value={district}>{district}</option>
            })}
          </select>
        )
    }

    return (
      <div style={styles.container} >
        <div style={styles.navWrapper}>
          <h1 style={styles.navTitle}>CLIx SCHOOL CONFIGURATION</h1>
        </div>
        <section style={styles.section}>
          <h3>New Configuration</h3>
          <form action="">
            <div style={styles.formRow}>
              <label for="state" style={styles.label}>Select State</label>
              <select id="state"
                value={this.props.form.state}
                onChange={this._onUpdateState}
                style={styles.value}>
                <option value="None"></option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Telangana">Telangana</option>
              </select>
            </div>
            <div style={styles.formRow}>
              <label for="district" style={styles.label}>Select District</label>
              {districts}
            </div>
            <div style={styles.formRow}>
              <label for="schoolId" style={styles.label}>School ID</label>
              <input id="schoolId" type="text"
                style={styles.value}
                value={this.props.form.schoolId}
                onChange={this._onUpdateSchoolId}/>
            </div>
            <div style={styles.formRow}>
              <label for="terminalId" style={styles.label}>Terminal ID</label>
              <input id="terminalId" type="text"
                style={styles.value}
                value={this.props.form.terminalId}
                onChange={this._onUpdateTerminalId}/>
            </div>
            <div style={styles.formRow}>
              <label for="locale" style={styles.label}>Locale</label>
              <select id="locale"
                style={styles.value}
                value={this.props.form.locale}
                onChange={this._onUpdateLocale}>
                  <option value="-1"></option>
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="te">Telugu</option>
                </select>
            </div>
            <div>
              <button onClick={(e) => this._setSchoolConfiguration(e)}>Save</button>
            </div>
          </form>
        </section>
        <section style={styles.section}>
          <h3>Current Configuration</h3>
          {currentConfig}
        </section>
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
