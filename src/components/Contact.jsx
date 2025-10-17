    import '../styles/Contact.css';
    import React from 'react';
    import telefoneIcon from '../assets/icons/telefone-icone.svg';
    import emailIcon from '../assets/icons/email-icone.svg';


    function Contact(){
        return(
        <section className='contact-section'>
            <div className='contact-info'>
                
                <h2>Drop Me a Message</h2>
                <p>I'd love to hear from you! <br />You can choose your preferred method of contact:</p>

                <div className='contact-item'>
                    <img src={telefoneIcon} alt="Telephone" />
                    <span>+55 1197686-1025</span>
                </div>
                <div className='contact-item'>
                    <img src={emailIcon} alt="Email" />
                    <span>contato.viniciupsantos28@gmail.com</span>
                </div>
            </div>

            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section> 
        )
    }

    export default Contact;