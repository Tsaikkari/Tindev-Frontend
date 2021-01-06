import { combineReducers } from 'redux'

import employer from './employer'
import jobseeker from './jobseeker'
import resources from './resources'
import skill from './skill'

const rootReducer = () =>
  combineReducers({ employer, jobseeker, resources, skill })

export default rootReducer
