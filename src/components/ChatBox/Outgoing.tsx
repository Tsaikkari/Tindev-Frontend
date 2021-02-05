import React from 'react'
import { Image } from 'react-bootstrap'
const Outgoing = () => {
  return (
    <>
      <li className="chat-right">
        <div className="chat-hour">
          08:56 <span className="fa fa-check-circle"></span>
        </div>
        <div className="chat-text">
          Hi, Dlip <br />I need more information about Developer Plan.
        </div>
        <div className="chat-avatar">
          <Image
            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
            alt="avatar"
          />
          <div className="chat-name">Sam</div>
        </div>
      </li>
    </>
  )
}
export default Outgoing
