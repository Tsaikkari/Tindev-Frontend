import React, { useEffect } from 'react'
import axios from 'axios'

import Routes from './Routes'
import './scss/styles.scss'
import LocalStorage from './local-storage'

const App = () => {
  useEffect(() => {
    axios.interceptors.request.use((config: any) => {
      const token = LocalStorage.getToken()
      console.log('this is config', config)
      const regEx: any = /https:\/\/tindev-dev-test.s3.amazonaws.com\/tindev-image/g
      let isMatch = config.url.match(regEx) ?? [] // exact same as config.url.match(regEx) ? config.url.match(regEx) : []

      console.log(isMatch[0])
      if (token && isMatch.length === 0) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      console.log(config)
      return config
    })
  }, [])

  return (
    <>
      <Routes />
    </>
  )
}

export default App
