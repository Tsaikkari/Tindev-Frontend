import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './saga'
import { AppState } from './types'

export const initState: AppState = {
  user: {
    credential: { email: '', password: '' },
    userInfo: {
      role: '',
    },
    loading: false,
    error: null,
    skills: [],
  },
  employer: {
    credential: { email: '', password: '' },
    employerInfo: {
      companyName: '',
      companyInfo: '',
      address: '',
      role: '',
      jobPosts: [],
    },
    loading: false,
    error: null,
  },
  jobseeker: {
    credential: { email: '', password: '' },
    role: '',
    loading: false,
    error: null,
    skills: [],
  },
  resources: {
    skills: [],
    loading: false,
    error: null,
    jobPost: {
      title: '',
      jobDescription: '',
      seniority: '',
      skills: [],
      startingDate: '',
      loading: false,
      error: null,
    },
  },
  skill: {
    inProfile: [],
    loading: false,
    error: null,
  },
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  let composeEnhancer = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    rootReducer(),
    // @ts-ignore
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
