import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { LiveMessage } from 'react-aria-live'
import DocumentTitle from 'react-document-title'
import '../../styles/components/c-slnconfig.css'

class StarLogoNova extends Component {
  componentDidMount () {
  }
  render () {
    // check if form is filled out, disable button if not
    const formVals = Object.values(this.props.form)
    const formFilled = formVals.every(formVal => (formVal !== null) && (formVal !== ''))
    const buttonRegion = !formFilled
      ? (<div className='c-sln__form-button-region'>
        <LiveMessage
          aria-live='polite'
          message='Please fill in all form fields to create a locked model'
        />
        <button disabled className='c-sln__form-button'>Create</button>
        <span>Please fill in all form fields</span>
      </div>)
      : (<div className='c-sln__form-button-region'>
        <LiveMessage
          aria-live='polite'
          message='All fields filled, create button enabled' />
        <button
          className='c-sln__form-button'
          onClick={(e) => this._createLockedModel(e)}
        >
          Create
        </button>
      </div>)

    return (
      <DocumentTitle title='Clix Star Logo Nova Create Locked Model | Clix Modules'>
        <div className='c-sln__wrapper'>
          <main className='c-sln__main' aria-label='content'>
            <header className='c-sln__header'>
              <h1
                className='c-sln__heading'
                aria-label='Clix Star Logo Nova Create Locked Model'>
                CLIx Star Logo Nova Create Locked Model
              </h1>
            </header>
            <section className='c-sln__section'>
              <article className='c-sln__new-config' aria-label='New Model'>
                <h2 className='c-sln__config-header'>New Locked Model</h2>
                <form action='' className='c-sln__form'>
                  <label
                    htmlFor='title'
                    className='c-sln__form--label'>
                    Project Title
                    <span> (required)</span>
                  </label>
                  <input
                    type='text'
                    id='title'
                    value={this.props.form.title}
                    onChange={this._onUpdateTitle}
                    placeholder='Project Title'
                    aria-required
                  />
                  <label
                    htmlFor='description'
                    className='c-sln__form--label'>
                    Project Description
                    <span> (required)</span>
                  </label>
                  <input
                    id='description'
                    type='text'
                    value={this.props.form.description}
                    onChange={this._onUpdateDescription}
                    aria-required
                    placeholder='Project Description'
                  />
                  <label
                    htmlFor='project-string'
                    className='c-sln__form--label'>
                    Project String
                    <span> (required)</span>
                  </label>
                  <textarea
                    id='project-string'
                    value={this.props.form.projectStr}
                    onChange={this._onUpdateProjectStr}
                    aria-required
                    placeholder='Project String'
                  />
                  {buttonRegion}
                </form>
              </article>
            </section>
          </main>
        </div>
      </DocumentTitle>
    )
  }

  _createLockedModel = (e) => {
    e.preventDefault()
    this.props.onCreateLockedModel(this.props.form)
    browserHistory.push('/')
  }

  _onUpdateTitle = (e) => {
    this.props.onUpdateModelForm({
      title: e.target.value,
      description: this.props.form.description,
      projectStr: this.props.form.projectStr
    })
  }

  _onUpdateDescription = (e) => {
    this.props.onUpdateModelForm({
      title: this.props.form.title,
      description: e.target.value,
      projectStr: this.props.form.projectStr
    })
  }

  _onUpdateProjectStr = (e) => {
    this.props.onUpdateModelForm({
      title: this.props.form.title,
      description: this.props.form.description,
      projectStr: e.target.value
    })
  }
}

StarLogoNova.propTypes = {
  onCreateLockedModel    : React.PropTypes.func,
  onUpdateModelForm      : React.PropTypes.func,
  form                   : React.PropTypes.shape({
    description: React.PropTypes.string,
    projectStr: React.PropTypes.string,
    title: React.PropTypes.string
  })
}

export default StarLogoNova
