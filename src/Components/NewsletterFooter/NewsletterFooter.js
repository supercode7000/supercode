import React, { Component } from 'react';
import './newsletter-footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Typing from 'react-typing-animation';




class NewsletterFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section className="NewsletterFooter">
                <div className="NewsletterBlau">
                    <h1>Lust bekommen oder noch Fragen?</h1>
                    <h1>Dann nimm gerne Kontakt mit uns auf!</h1>
                    <a href="#">Jetzt Termin vereinbaren</a>
                </div>
                <div className="NewsletterBox">
                    <div className="socialMedia">
                        <div>
                            <span className="FooterTypingGreen">super(</span><span className="FooterTypingBlue">code</span><span className="FooterTypingGreen">) => super( </span>
                            <Typing className="FooterTypingBlue" loop={true}>
                                <span>nachhalting</span>
                                <Typing.Backspace count={12} delay={1000} />
                                <span>genial</span>
                                <Typing.Backspace count={7} delay={1000} />
                                <span>cool</span>
                                <Typing.Backspace count={5} delay={1000} />
                                <span>super</span>
                                <Typing.Backspace count={6} delay={1000} />
                                <span>Kaffee</span>
                                <Typing.Backspace count={7} delay={1000} />
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
                </div>
            </section >
        );
    }
}

export default NewsletterFooter;