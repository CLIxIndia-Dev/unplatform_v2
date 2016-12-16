// reducers/index.js

import moduleReducer from './Module/Module'
import schoolConfigurationReducer from './SchoolConfiguration/SchoolConfiguration'
import stringsReducer from './Strings/Strings'
import surveyReducer from './Survey/Survey'
import versionReducer from './Version/Version'
// ... other reducers

export default {
  module: moduleReducer,
  school: schoolConfigurationReducer,
  strings: stringsReducer,
  survey: surveyReducer,
  version: versionReducer
  // ... other reducers
}
