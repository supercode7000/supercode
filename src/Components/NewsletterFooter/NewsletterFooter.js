import React, { Component } from 'react';
import NewsletterBox from './NewsletterBox';





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
                <NewsletterBox />
            </section >
        );
    }
}

export default NewsletterFooter;