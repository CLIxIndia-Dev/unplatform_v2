// reducers/index.js

import moduleReducer from './Module/Module'
import schoolConfigurationReducer from './SchoolConfiguration/SchoolConfiguration'
import stringsReducer from './Strings/Strings'
import surveyReducer from './Survey/Survey'
import versionReducer from './Version/Version'
import slnReducer from './StarLogoNova'
// ... other reducers

export default {
  module: moduleReducer,
  school: schoolConfigurationReducer,
  strings: stringsReducer,
  survey: surveyReducer,
  version: versionReducer,
  sln: slnReducer
  // ... other reducers
}
