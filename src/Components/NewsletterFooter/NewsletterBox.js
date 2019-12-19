import React from 'react';
import './newsletter-footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Typing from 'react-typing-animation';

const NewsletterBox = () => {
    return (<div className="NewsletterBox">
        <div className="socialMedia">
            <div>
                <span className="FooterTypingGreen">super(</span><span className="FooterTypingBlue">code</span><span className="FooterTypingGreen">) => super( </span>
                <Typing className="FooterTypingBlue" loop={true} speed={1}>
                    <span>nachhalting</span>
                    <Typing.Backspace count={12} delay={100} />
                    <span>genial</span>
                    <Typing.Backspace count={7} delay={100} />
                    <span>cool</span>
                    <Typing.Backspace count={5} delay={100} />
                    <span>super</span>
                    <Typing.Backspace count={6} delay={100} />
                    <span>Kaffee</span>
                    <Typing.Backspace count={7} delay={100} />
                </Typing>
                <span className="FooterTypingGreen">)</span>

            </div>
            <div className="NewsletterFooterIcons">
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>

        </div>
        <div className="NewsletterNewsletter">
            <h1>Newsletter</h1>
            <div className="NewsletterInput">
                <input type="email" name="newsletter" id="newsletter" placeholder="Deine E-Mail" />
                <a href="#">&#10230;</a>
            </div>
        </div>
    </div>);
}

export default NewsletterBox;