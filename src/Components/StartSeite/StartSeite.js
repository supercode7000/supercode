import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Home from '../Home/Home';
import MethodikDidaktik from '../methodik-didaktik/MethodikDidaktik'
import TwoColSection from '../TwoColSection/TwoColSection';
import poster from "./poster.jpg"
import Zukunft from '../Zukunft/Zukunft';
<<<<<<< HEAD
import Footer from '../footer/Footer';
import Card from '../Card/Card';
=======


>>>>>>> 3d130e1c1089e1185dcd080dba73514ae9b0a474

class StartSeite extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navigation />
                <Home />
                <MethodikDidaktik />
                <TwoColSection aside={'Über uns'} img={poster} title={'Hallo Welt!'} title2={'Wir sind SuperCode'} description={"- ein Team aus Expert*innen mit langjährige Erfahrung und einer klaren Vision: Digitale Bildung für Alle, nachhaltig und modern."} link={'Lerne uns kennen'} />
                <Zukunft />
                <Card />
            </div>

        );
    }
}

export default StartSeite;