import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer>
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
                <div>
                    <Link  className="footerImpressum" to="impressum">Impressum</Link>
                </div>
                <div>
                    <Link className="footerDSGVO" to="datenschutz">Datenschutz</Link>
                </div>
            </footer>
        </footer>
    );
}

export default Footer;