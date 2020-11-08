import React from 'react'
import {Divider, ContactIcons} from '../util/Util'

import "./Content.css";

function Contact() {
  return (
    <div className="up-box">
      <span style={{fontSize: "30px", fontFamily: "Raleway", letterSpacing: ".1em", color: "grey"}}>Contact Form</span>
      <Divider /> <br /><br />

      <span style={{fontFamily: "Raleway", letterSpacing: ".1em", color: "inherit"}}>
        Please free to drop me a mail at &nbsp;
        <a href="mailto:saur2706@gmail.com" style={{color: "grey", textDecoration:"none", borderBottom: "1px dashed #999"}}>
          saur2706@gmail.com
        </a>
        &nbsp;, or you can also ping me on other platforms -
      </span>
      <div style={{transform: "scale(0.5)"}}> <ContactIcons /> </div>

    </div>
  )
}

export default Contact
