import React, { Component } from 'react';
import './tagesablauf.css'
import TagesablaufCard from '../TagesablaufCard/TagesablaufCard';


const dataTagesablaufVollzeit = [
    { time: "09:00 - 09:45 Uhr", info: "Wiederholung, Q&A", info2: "Good Morning Recap", dauer: "45 Min" },
    { time: "09:45 - 12:00 Uhr", info: "Neue Inhalte erkunden", info2: "Explore the Unknown", dauer: "135 Min" },
    { time: "12:00 - 12:45 Uhr", info: "Mittagspause", info2: "Relax & Energize", dauer: "45 Min" },
    { time: "12:45 - 16:30 Uhr", info: "Anwendung neu erlernter Themen in Übungen und Praxisprojekten. Austausch in der Gruppe zu Ideen, Erkenntnissen und Fragen zu den laufenden Projekten.", info2: "Codeflow", dauer: "225 Min" },
    { time: "16:30 - 17:15 Uhr", info: "Nachbesprechung, Zusammenfassung, Q&A, 1on1s", info2: "FlexTime", dauer: "45 Min" },
    { time: "17:15 - 18:00 Uhr", info: "Abschluss der Praxisprojekte/der Übungen, Heimarbeit", info2: "", dauer: "45 Min" }
]
const dataTagesablaufTeilzeit = [
    { time: "Montag & Mittwoch & Freitag:", time2: "18:00 - 18:45 Uhr", info: "Wiederholung, Q&A", info2: "Good Evening Recap", dauer: "45 Min" },
    { time: "Montag & Mittwoch & Freitag:", time2: "18:45 - 19:30 Uhr", info: "Neue Inhalte erkunden", info2: "Explore the Unknown", dauer: "45 Min" },
    { time: "Montag & Mittwoch & Freitag:", time2: "19:30 - 20:15 Uhr", info: "Anwendung neu erlernter Themen in Übungen", info2: "Codeflow", dauer: "45 Min" },
    { time: "Montag & Mittwoch & Freitag:", time2: "20:15 - 21:00 Uhr", info: "Austausch in der Gruppe", info2: "Codeflow", dauer: "45 Min" },
    { time: "", info: "Abschluss der Praxisobjekte / Übungen / Heimarbeit", info2: "Project Time", dauer: "90 Min" },
    { time: "Samstag:", time2: "09:00 - 09:45 Uhr", info: "Wiederholung, Q&A", info2: "Good Morning Recap", dauer: "45 Min" },
    { time: "Samstag:", time2: "09:45 - 12:00 Uhr", info: "Neue Inhalte erkunden", info2: "Explore The Unknown", dauer: "135 Min" },
    { time: "Samstag:", time2: "12:00 - 12:45 Uhr", info: "Mittagspause", info2: "Relax & Energize", dauer: "45 Min" },
    { time: "Samstag:", time2: "12:45 - 16:30 Uhr", info: "Anwendung neu erlernter Themen in Übungen und Praxisprojekten. Austausch in der Gruppe zu Ideen, Erkenntnissen und Fragen zu den laufenden Projekten.", info2: "Codeflow", dauer: "225 Min" },
    { time: "Samstag:", time2: "16:30 - 17:15 Uhr", info: "Nachbesprechung, Zusammenfassung, Q&A, 1on1s", info2: "FlexTime", dauer: "45 Min" }
]

class Tagesablauf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonSelected: true,
        }
    };
    handle3Monate = () => {
        this.setState({ buttonSelected: true });
    };
    handle6Monate = () => {
        this.setState({ buttonSelected: false });
    };
    render() {
        let dataTagesablauf = "";
        if (this.state.buttonSelected) {
            dataTagesablauf = dataTagesablaufVollzeit.map((data, i) => <TagesablaufCard key={i} data={data} />)
        } else {
            dataTagesablauf = dataTagesablaufTeilzeit.map((data, i) => <TagesablaufCard key={i} data={data} />)
        };

        return (

            <section className="Tagesablauf">
                <h1>Tagesablauf</h1>
                <div className="Tagesablauf-Container">
                    <div className="Tagesablauf-Select">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, architecto.
                        <button onClick={this.handle3Monate} className={this.state.buttonSelected ? "active" : "deactive"}>3 Monate Vollzeit</button>
                        <button onClick={this.handle6Monate} className={this.state.buttonSelected ? "deactive" : "active"}>6 Monate Teilzeit</button>
                    </div>
                    <div className="Tagesablauf-Tagesablauf">
                        {dataTagesablauf}
                    </div>
                </div>

            </section>
        );
    }
}

export default Tagesablauf;
