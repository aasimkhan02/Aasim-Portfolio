import React from 'react'

const Contact = () => {
  return (
    <div className="Contact-me">
                <h1>Let's Work <br/> Together</h1>
                <div className="contact">
                    <div className="details">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <input type="text" placeholder='Message'/>
                </div>
                <div className="Socials">
                    <h2>Socials</h2>
                    <hr/>
                    <div className="social-links">
                        <div className="social-media">
                            <h3>Github</h3>
                            <h3>Linkedin</h3>
                            <h3>Leetcode</h3>
                            <h3>Instagram</h3>
                        </div>
                        <div className="private-links">
                            <h3>Phone number:<br /><span>+91 9378234570</span></h3>
                            <h3>Email:<br /><span>aasimkroc@gmail.com</span></h3>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Contact
