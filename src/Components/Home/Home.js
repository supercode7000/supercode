import React from 'react';
import './home.css'
import Typing from 'react-typing-animation';
import LinkToBootcamps from '../LinkToBootcamps/LinkToBootcamps';

const Home = () => {
    return (
        <div>
            <section id="home-start-seite">

                <h1 className="home-start-seite">Wir sind super(code)</h1>
                <h1 className="home-start-seite typing"><span>Wir sind </span>
                    <span>
                        <Typing className="my-typing" loop={true}>
                            <Typing.Speed ms={20} />
                            <span>Digital</span>
                            <Typing.Backspace count={8} speed={10} />
                            <Typing.Speed ms={20} />
                            <span> Javascript</span>
                            <Typing.Backspace count={12} speed={10} />
                            <Typing.Speed ms={20} />
                            <span> React</span>
                            <Typing.Backspace count={7} speed={10} />
                            <Typing.Speed ms={20} />
                            <span> Cool</span>
                            <Typing.Backspace count={6} speed={10} />
                            <Typing.Speed ms={20} />
                            <span> Super</span>
                            <Typing.Backspace count={7} speed={10} />
                        </Typing>
                    </span>
                </h1>


            </section>
            <LinkToBootcamps displayGray={true} />
        </div>);
}

export default Home;