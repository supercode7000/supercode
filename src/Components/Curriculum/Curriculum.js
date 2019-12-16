import React, { Component } from 'react';
import CurriculumCard from '../CurriculumCard/CurriculumCard';
import './curriculum.css'


class Curriculum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null

        }
    }
    onSubmit = e => {
        e.preventDefault();
    };
    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    };
    render() {
        const CurriculumOutput = CurriculumData.map((data, i) => <CurriculumCard key={i} data={data} />)
        return (
            <section className="Curriculum">
                {CurriculumOutput}
                <div className="Curriculum-hide">
                    <div className="Curriculum-Newsletter">
                        <h1>Bekomme den detaillierten Lehrpan als E-Mail zugeschickt</h1>
                        <div className="Curriculum-NewsletterInput">
                            <form>
                                <input type="email" name="newsletter" id="CurriculumNewsletter" placeholder="Deine E-Mail" onChange={this.handleEmail} required />
                                <input type="submit" value="&#10230;" onClick={this.onSubmit} />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Curriculum;

const CurriculumData = [
    { titleDescription: "Lorem ipsum dolor sit.", titleTitle: "HTML", expandText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse quidem itaque corrupti magnam vitae, explicabo eaque aperiam dicta adipisci?" },
    { titleDescription: "Lorem ipsum dolor sit.", titleTitle: "Javascript", expandText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse quidem itaque corrupti magnam vitae, explicabo eaque aperiam dicta adipisci?" },
    { titleDescription: "Lorem ipsum dolor sit.", titleTitle: "Javascript", expandText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse quidem itaque corrupti magnam vitae, explicabo eaque aperiam dicta adipisci?" },
    { titleDescription: "Lorem ipsum dolor sit.", titleTitle: "Git & GitHub", expandText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse quidem itaque corrupti magnam vitae, explicabo eaque aperiam dicta adipisci?" },
    { titleDescription: "Lorem ipsum dolor sit.", titleTitle: "Design & UX", expandText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse quidem itaque corrupti magnam vitae, explicabo eaque aperiam dicta adipisci?" },
    { titleDescription: "Lorem ipsum dolor sit.", titleTitle: "CMS", expandText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse quidem itaque corrupti magnam vitae, explicabo eaque aperiam dicta adipisci?" },
    { titleDescription: "Lorem ipsum dolor sit.", titleTitle: "Plus Skills", expandText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse quidem itaque corrupti magnam vitae, explicabo eaque aperiam dicta adipisci?" },
    { titleDescription: "Lorem ipsum dolor sit.", titleTitle: "Abschlussprojekt", expandText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse quidem itaque corrupti magnam vitae, explicabo eaque aperiam dicta adipisci?" }
]
