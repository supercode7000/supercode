import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <Router>
            <Switch>
                {/* component="" durch component={Zielcomponent} ersetzen */}

                <Route path="/impressum" component="" />
                <Route path="/datenschutz" component="" />

                <Route path="/events" component="" />
                <Route path="/anmeldung" component="" />
                <Route component="" /> {/* für Error */}
            </Switch>
            <footer className="footerInfo">
                <div>
                    <h5 className="footerInfoHeadline">SuperCode GmbH & Co. KG</h5>
                    <p>Ratherstr. 25</p>
                    <p>40476 Düsseldorf</p>
                    <p className="footerInfoPhone"><FontAwesomeIcon icon={faPhoneAlt} /> +49 211 7817 233-0</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> hallo@super-code.de</p>
                </div>
                <div>
                    <h5 className="footerInfoHeadline">Kurse & Workshops</h5>
                    <p>Web-Entwicklung Front-End 3 Monate Vollzeit</p>
                    <p>Web-Entwicklung Front-End 6 Monate Teilzeit</p>
                    <p>Workshop</p>
                </div>
                <div>
                    <h5 className="footerInfoHeadline">Informationen</h5>
                    <p>Unser Aufnahmeprozess</p>
                    <p>Finanzierung</p>
                    <p>Kurse im Detail</p>
                    <p>Campus</p>
                </div>
                <div>
                    <h5 className="footerInfoHeadline">Über uns</h5>
                    <p>Philosophie</p>
                    <p>Team</p>
                    <p>Partner</p>
                    <p>Events</p>
                    <p>Jobs</p>
                    <p>Blog</p>
                    <p>Presse</p>
                </div>
            </footer>
            <footer className="footerImpressumDSGVO">
                <div className="footerCopyright">
                    <img className="footerCopyrightImage" src="./img/supercode_logo_mobile.png" alt="Supercode Copyright" />
                    2019 supercode
            </div>
                <div className="footerImpressum">
                    Impressum
            </div>
                <div className="footerDSGVO">
                    Datenschutz
            </div>
            </footer>
        </Router>
    );
}

export default Footer;