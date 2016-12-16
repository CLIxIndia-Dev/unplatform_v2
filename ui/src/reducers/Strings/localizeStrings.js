
// ----
// Action types
export const RECEIVE_LOCALIZED_STRINGS = 'RECEIVE_LOCALIZED_STRINGS'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveLocalizedStrings (strings) {
  return { type: RECEIVE_LOCALIZED_STRINGS, strings }
}

// gets the current school configuration
export function localizeStrings (strings, locale) {
  return function (dispatch) {
    if (!locale) {
      locale = 'en'
    }
    strings.setLanguage(locale)
    dispatch(receiveLocalizedStrings(strings))
  }
}
