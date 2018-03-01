import _ from 'lodash'

const MAX_CHARS = 40;

export function getSubjects (state, props) {
  if (!state.module.modules) {
    return null
  }

  return _.map(_.filter(_.keys(state.module.modules), (key) => {
    return key !== 'Tools'}),
    subject => _.truncate(subject, MAX_CHARS))
}

export function getTools (state, props) {
  if (!state.module.modules) {
    return null
  }

  return _.keys(state.module.modules.Tools)
}

export function getSubTools (state, props) {
  if (!state.module.modules || !props.params.toolName) {
    return null
  }

  return _.keys(state.module.modules.Tools[props.params.toolName])
}

export function getGrades (state, props) {
  if (!state.module.modules || !props.params.subjectName) {
    return null
  }

  return _.map(_.keys(state.module.modules[props.params.subjectName]),
    grades => _.truncate(grades, MAX_CHARS))
}

export function getUnits (state, props) {
  if (!state.module.modules ||
      !props.params.subjectName) {
    return null
  }

  return _.map(_.keys(state.module.modules[props.params.subjectName]),
    unit => _.truncate(unit, MAX_CHARS))
}

export function getLessons (state, props) {
  if (!state.module.modules ||
      !props.params.subjectName ||
      !props.params.unitName) {
    return null
  }

  return _.map(_.keys(state.module.modules[props.params.subjectName][props.params.unitName]),
    lesson => _.truncate(lesson, MAX_CHARS))
}
