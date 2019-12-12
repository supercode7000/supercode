import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import MethodikDidaktik from '../methodik-didaktik/MethodikDidaktik'
import TwoColSectionSlider from '../TwoColSectionSlider/TwoColSectionSlider';
import BootcampsWorkshops from '../BootcampsWorkshops/BootcampsWorkshops';
import Termine from '../Termine/Termine';
import NoMoney from '../NoMoney/NoMoney';
import Trainer from '../Trainer/Trainer';
import TextSliderAlumni from '../TextSliderAlumni/TextSliderAlumni';
import Partner2 from '../Partner2/Partner2';
import Footer from '../footer/Footer';
import NewsletterFooter from '../NewsletterFooter/NewsletterFooter';





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
                <Trainer />
                <TwoColSectionSlider aside={'LOCATION'} img="" title={'Vivamus elementum semper nisi.'} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam perferendis aliquam quia? Ut, repudiandae quasi deleniti nesciunt vitae corrupti."} />
                <TextSliderAlumni />
                <Partner2 />
                <NewsletterFooter />
                <Footer />
            </div>
         );
    }
}
 
export default KursSeite;