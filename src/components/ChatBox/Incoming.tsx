import React from 'react'
import { Image } from 'react-bootstrap'
const Incoming = () => {
  return (
    <>
      <li className="chat-left">
        <div className="chat-avatar">
          <Image
            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
            alt="avatar"
          />
          <div className="chat-name">Kirsi</div>
        </div>
        <div className="chat-text">
          Hello, I'm Kirsi. <br />
          How can I help you today?
        </div>
        <div className="chat-hour">
          08:55 <span className="fa fa-check-circle"></span>
        </div>
      </li>
    </>
  )
}
export default Incoming
