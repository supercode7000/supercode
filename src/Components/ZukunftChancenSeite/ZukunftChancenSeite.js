import React from 'react';
import ZukunftChancen from '../ZukunftChanchen/ZukunftChancen';
import Navigation from '../navigation/Navigation';
import Tagesablauf from '../Tagesablauf/Tagesablauf';
import OnePicture from '../OnePicture/OnePicture';
import NoMoney from '../NoMoney/NoMoney';
import MethodikDidaktik from '../methodik-didaktik/MethodikDidaktik';
import TwoColSection from '../TwoColSection/TwoColSection';
import poster from "../StartSeite/poster.jpg"
import Workshop from '../Workshops/Workshops';


const ZukunftChanchenSeite = () => {
    return ( 
        <div>
            <Navigation />
            <ZukunftChancen />
            <Tagesablauf />
            <OnePicture />
            {/* Curriculum */}
            <NoMoney />
            <MethodikDidaktik />
            <Workshop />
        </div>
     );
}
 
export default ZukunftChanchenSeite;