import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
    const Contact = () => {
    const [emailsent, setEmailsent] = useState(false);
    const [sendMessageBtn, setSendMessageBtn] = useState('Send Message');
    const contactme = useRef();
   
    const messagingStatus = () => {
        const formFields = contactme.current.querySelectorAll('input, textarea');
        const isFormValid = Array.from(formFields).every(field => field.value !== '');
    
        if(isFormValid){
            setSendMessageBtn("...Sending");
        }else{
        //alert('All are empty');    
        }


    }
    

   

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tolr08r', 'template_wt53oe5', contactme.current, 'ZcL4rFT12gbG12MN2')
          .then((result) => {
              setEmailsent(true);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return ( 
        <div className="contact" id="contact">
            <div className="bridge">
            <div className="contact__panes">
                  <div className="contact__pane__left">
                  <h3>Contact Me</h3>
                    <p>
                        Feel free to reach out to me for your offer and enquiries.
                    </p>
                  </div>
                  <div className="contact__pane__right" style={{marginTop:'20px'}}>
                   <b>My Email: </b><a href="mailto:adeoti360@gmail.com" style={{color:'aqua', }}> adeoti360@gmail.com</a>
                  </div>
                </div>
                <div className="contact__break">
                    <div className="contact__words" style={{marginTop:'26px'}}>
                    <span style={{color:'aqua'}}>&hearts; &hearts;</span> &nbsp;
                        Kindly fill the fields and I will respond to you shortly without much delay. I'm looking forward to receieve your offer. You can also reach out to me via my email. 
                        <span style={{color:'aqua'}}>&hearts; &hearts;</span>
                    </div>
                    <div className="contact__form">
                    <form action="" ref={contactme} onSubmit={sendEmail}>
                       
                    {emailsent && <div className="contact__mailSent">Thanks for reaching out to me. I will get back shortly! <span style={{color:'aqua'}}>&hearts; &hearts;</span></div>}
                       
                    
                       
                       
                        {!emailsent &&
                         (
                        <>
                        <input type="text" name="user_fullname" required placeholder="Your full name"/>
                        <input type="email" name="user_email" required placeholder="Your email address"/>
                        <textarea placeholder="Write your message here ..." required name="user_msg"></textarea>
                        
                        <button className="contact__form--sender" onClick={messagingStatus}>{sendMessageBtn}</button>
                        </>
                        )}
                    </form>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;