import React from 'react';
import './blog-item.css'
import poster from '../../img/poster.jpg'
const BlogItem = () => {
    return (
        <figure className="blog-item">
            <h5>Kooperation, Netzwerk</h5>
            <img src={poster} alt="" />
            <figcaption>
                <h2>Gründerstammtisch Spezial #70</h2>
                <div className="figcaption-right-container">
                    <p>Web-Entwicklung für Anfänger*innen - kostenfreirer Workshop beim Gründerstammtisch im Super7000 Datum: Mittwoch, 3. Juli...</p>
                    <a href="">Artikel lesen →</a>
                </div>
            </figcaption>
        </figure>);
}

export default BlogItem;