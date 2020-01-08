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
import Curriculum from '../Curriculum/Curriculum';
import TextSliderAlumni from '../TextSliderAlumni/TextSliderAlumni';
import Card from '../Card/Card';
import NewsletterFooter from '../NewsletterFooter/NewsletterFooter';
import Footer from '../footer/Footer';
import poster2 from "./poster.jpg"



const ZukunftChanchenSeite = () => {
    return (
        <div>
            <Navigation />
            <ZukunftChancen />
            <Tagesablauf />
            <OnePicture />
            <Curriculum />
            <NoMoney />
            <MethodikDidaktik />
            <TwoColSection isWhite={true} aside={twoColSection[2].aside} img={poster2} title={twoColSection[2].title} title2={twoColSection[2].title2} description={twoColSection[2].description} />
            <TextSliderAlumni />
            <Card />
            <NewsletterFooter />
            <Footer />
        </div>
    );
}

export default ZukunftChanchenSeite;

const twoColSection = [
    {
        aside: 'Über uns',
        title: 'Hallo Welt!',
        title2: 'Wir sind SuperCode',
        description: "- ein Team aus Expert*innen mit langjährige Erfahrung und einer klaren Vision: Digitale Bildung für Alle, nachhaltig und modern.",
        link: 'Lerne uns kennen'
    },
    {
        aside: 'super(7000) Coworking space',
        title: 'Unser Campus ist',
        title2: 'viel mehr',
        description: "Unsere Schule befindet sich im super7000. Auf über 1.000 qm arbeiten mehr als 50 unternehmen in offenen Büros und in Teambüros inklusive Telefonzellen, Meetingräumen, Bällebad und der legedären Eventfläche auf echtem kunstrasenfür Workshops, Meet-Ups & Co. Wir nutzen dieses einzigartige Umfeld, um Dich noch schneller im passendeJobs zu vermitteln. #superwinwin",
        link: 'Lerne uns kennen'
    },
    {
        aside: 'Workshops',
        title: 'Unser Campus ist',
        title2: 'viel mehr',
        description: "Unsere Schule befindet sich im super7000. Auf über 1.000 qm arbeiten mehr als 50 unternehmen in offenen Büros und in Teambüros inklusive Telefonzellen, Meetingräumen, Bällebad und der legedären Eventfläche auf echtem kunstrasenfür Workshops, Meet-Ups & Co. Wir nutzen dieses einzigartige Umfeld, um Dich noch schneller im passendeJobs zu vermitteln. #superwinwin",
        link: 'Workshop Termine'
    }
]