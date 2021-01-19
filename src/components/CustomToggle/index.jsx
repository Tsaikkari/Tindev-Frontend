import React from 'react'
import { Button } from 'react-bootstrap'

import './CustomToggle.scss'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    className="toggle-button"
    ref={ref}
    onClick={e => {
      e.preventDefault()
      onClick(e)
    }}
  >
    {children}
    &#x25bc;
  </Button>
))

export default CustomToggle
