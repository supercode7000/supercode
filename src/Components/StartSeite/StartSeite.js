import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Home from '../Home/Home';
import MethodikDidaktik from '../methodik-didaktik/MethodikDidaktik'
import TwoColSection from '../TwoColSection/TwoColSection';
import poster from "./poster.jpg"
import Zukunft from '../Zukunft/Zukunft';
import Footer from '../footer/Footer';
import Card from '../Card/Card';
import VideoComponent from '../video/VideoComponent';
import OneColSection from '../OneColSection/OneColSection';
import TextSliderAlumni from '../TextSliderAlumni/TextSliderAlumni';
import Partner from '../Partner/Partner';
<<<<<<< HEAD
import Blog from '../BlogItem/Blog';
=======
>>>>>>> a2b0a2b2a704450662564ab31355685ac162beed

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
                <VideoComponent />
                <MethodikDidaktik />
                <TwoColSection isWhite={true} aside={twoColSection[0].aside} img={poster} title={twoColSection[0].title} title2={twoColSection[0].title2} description={twoColSection[0].description} link={twoColSection[0].link} />
                <Zukunft />
                <Card />
                <OneColSection />
                <TwoColSection isWhite={false} aside={twoColSection[1].aside} img={poster} title={twoColSection[1].title} title2={twoColSection[1].title2} description={twoColSection[1].description} />
                <TextSliderAlumni />
                <Partner />
                <Blog />
                <Footer></Footer>
            </div>

        );
    }
}

export default StartSeite;

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
    }
]