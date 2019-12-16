import React, { Component } from 'react';
import './tagesablauf.css'
import TagesablaufCard from '../TagesablaufCard/TagesablaufCard';


const dataTagesablaufVollzeit = [
    { time: "9:00 - 9:45 Uhr", info: "Wiederholung, Q&A", info2: "Good morning Recap", dauer: "45 Min" },
    { time: "9:00 - 9:45 Uhr", info: "Wiederholung, Q&A", info2: "Good morning Recap", dauer: "45 Min" },
    { time: "9:00 - 9:45 Uhr", info: "Wiederholung, Q&A", info2: "Good morning Recap", dauer: "45 Min" },
    { time: "9:00 - 9:45 Uhr", info: "Wiederholung, Q&A", info2: "Good morning Recap", dauer: "45 Min" },
    { time: "9:00 - 9:45 Uhr", info: "Wiederholung, Q&A", info2: "Good morning Recap", dauer: "45 Min" },
    { time: "9:00 - 9:45 Uhr", info: "Wiederholung, Q&A", info2: "Good morning Recap", dauer: "45 Min" }
]
const dataTagesablaufTeilzeit = [
    { time: "Montag: 16:00 - 16:45 Uhr", info: "Wiederholung, Q&A", info2: "Good morning Recap", dauer: "45 Min" },
    { time: "Samstag: 10:00 - 11:0 Uhr", info: "Anderes Zeugs", info2: "Good morning Recap", dauer: "45 Min" },
    { time: "Samstag: 11:00 - 13:45 Uhr", info: "CodeFlow, Q&A", info2: "Good morning Recap", dauer: "45 Min" },
    { time: "Montag: 16:00 - 16:45 Uhr", info: "Wiederholung, Q&A", info2: "Good morning Recap", dauer: "45 Min" },
    { time: "Montag: 16:00 - 16:45 Uhr", info: "Wiederholung, Q&A", info2: "Good morning Recap", dauer: "45 Min" },
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
