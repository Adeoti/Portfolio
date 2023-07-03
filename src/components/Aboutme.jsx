import React from 'react';
import Adeotiimg from '../images/adeotiimg.png';

const Aboutme = () => {
  return (
    <div className="contact" id="about">
    <div className="bridge">
    <div className="contact__panes" style={{gap:'38px'}}>
          <div className="contact__pane__left" style={{textAlign:'center',order:'1'}}>
         
            <div className="aboutcaption" style={{marginTop:'14px'}}>
                <div style={{border:'3px solid #eee', borderRadius:'50%', maxHeight:'400px', overflow:'hidden'}}>
                    <img src={Adeotiimg}  style={{height:'100%', width:'100%', objectFit:'cover'}} alt='Adeoti'/>
                </div>
            </div>
          </div>
          <div className="contact__pane__right about-right" style={{order:'2', marginTop:'20px', textAlign:''}}>
          <h3 >About Me</h3>
            <p style={{fontSize:'17px', display:'none', marginBottom:'23px'}}>
                Feel free to reach out to me for your offer and enquiries.
            </p>
            <p>
            I'm Adeoti Nurudeen, a WordPress
developer with over 9 years
experience in coding and design.
Over the years, I've built a variety of
web apps with priority on great user
experience (ux).
            </p>
            <ul>
                <li>I've fell in love with WordPress</li>
                <li>I've built several functional and responsive websites and web apps</li>
                <li>I've worked with different APIs</li>
                <li>I learn new skills and stacks quickly</li>
                <li>I can blend with any work ethic</li>
            </ul>
          </div>
        </div>
        
    </div>
</div>
  )
}

export default Aboutme
