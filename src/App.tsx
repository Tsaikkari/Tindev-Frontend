import React, { useEffect } from 'react'
import axios from 'axios'

import Routes from './Routes'
import './scss/styles.scss'
import LocalStorage from './local-storage'
import useLogin from './hooks/useLogin'

const App = () => {
  useEffect(() => {
    axios.interceptors.request.use((config: any) => {
      const token = LocalStorage.getToken()
      const regEx: any = /https:\/\/tindev-dev-test.s3.amazonaws.com\/tindev-image/g
      let isMatch = config.url.match(regEx) ?? [] // exact same as config.url.match(regEx) ? config.url.match(regEx) : []

      if (token && isMatch.length === 0) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    })
  }, [])
  useLogin()
  return (
    <>
      <Routes />
    </>
  )
}

export default App
