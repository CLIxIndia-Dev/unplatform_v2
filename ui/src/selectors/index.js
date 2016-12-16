import _ from 'lodash'

export function getSubjects (state, props) {
  if (!state.module.modules) {
    return null
  }

  return _.filter(_.keys(state.module.modules), (key) => {
    return key !== 'Tools'})
}

export function getTools (state, props) {
  if (!state.module.modules) {
    return null
  }

  return _.keys(state.module.modules.Tools)
}

export function getGrades (state, props) {
  if (!state.module.modules || !props.params.subjectName) {
    return null
  }

  return _.keys(state.module.modules[props.params.subjectName])
}

export function getUnits (state, props) {
  if (!state.module.modules ||
      !props.params.subjectName ||
      !props.params.gradeName) {
    return null
  }

  return _.keys(state.module.modules[props.params.subjectName][props.params.gradeName])
}

export function getLessons (state, props) {
  if (!state.module.modules ||
      !props.params.subjectName ||
      !props.params.gradeName ||
      !props.params.unitName) {
    return null
  }

  return _.keys(state.module.modules[props.params.subjectName][props.params.gradeName][props.params.unitName])
}
