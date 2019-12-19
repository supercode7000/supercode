import React from 'react';
import './noMoney.css';
import TextExpand from '../TextExpand/TextExpand';

const NoMoney = () => {
    return (
        <section className="noMoney-container">
            <div className="noMoney-aside">
                <h1>No Money</h1>
                <h2>No Problem</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe praesentium, assumenda vel tenetur earum aspernatur!</p>
                <a href="">Kontaktiere uns</a>
            </div>
            <div className="noMoney-textExpand">
                <TextExpand type="Lorem ipsum dolor sit." title="Bildungsgutschein" expandText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi similique animi soluta quis sit repudiandae iusto voluptatibus accusamus omnis? Numquam?" />
                <TextExpand type="Lorem ipsum dolor sit." title="Chancen eG" expandText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi similique animi soluta quis sit repudiandae iusto voluptatibus accusamus omnis? Numquam?" />
                <TextExpand type="Lorem ipsum dolor sit." title="Selbstzahler" expandText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi similique animi soluta quis sit repudiandae iusto voluptatibus accusamus omnis? Numquam?" />
            </div>


        </section>
    );
}

export default NoMoney;
