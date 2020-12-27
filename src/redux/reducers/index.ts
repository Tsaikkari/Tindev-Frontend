import { combineReducers } from "redux";
// import { employerRegister } from './employer'
// import { numberCollectionReducer, NumberCollectionState } from './numberReducer'

// export interface State {
//   numberCollection: NumberCollectionState
// }

// export const rootReducers = () =>
//   combineReducers({
//   employerRegister: employerRegisterReducer,
// })

import employer from "./employer";

const rootReducer = () => combineReducers({ employer });

export default rootReducer;
