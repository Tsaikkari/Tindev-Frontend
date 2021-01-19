import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children /*, style, className, */ }, ref) => {
    const [value, setValue] = useState('')

    return (
      <>
        <div
          //@ts-ignore
          ref={ref}
          // style={style}
          // className={className}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              child =>
                //@ts-ignore
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      </>
    )
  }
)

export default CustomMenu