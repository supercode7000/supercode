import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import MethodikDidaktik from '../methodik-didaktik/MethodikDidaktik'
import TwoColSection from '../TwoColSection/TwoColSection';
import BootcampsWorkshops from '../BootcampsWorkshops/BootcampsWorkshops';
import Termine from '../Termine/Termine';
import NoMoney from '../NoMoney/NoMoney';



class KursSeite extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Navigation />
                <BootcampsWorkshops />
                <Termine />
                <MethodikDidaktik />
                <NoMoney />
                {/* <TwoColSection aside={'Über uns'} img="" title={'Hallo Welt!'} title2={'Wir sind SuperCode'} description={"- ein Team aus Expert*innen mit langjährige Erfahrung und einer klaren Vision: Digitale Bildung für Alle, nachhaltig und modern."} link={'Lerne uns kennen'} /> */}
            </div>
         );
    }
}
 
export default KursSeite;