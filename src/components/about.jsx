import React from 'react';
import ReactDOM from 'react-dom';

class AboutArtist extends React.Component {
    render() {
        return <p className="AboutTitle">About</p>
    }

}

class Description extends React.Component {
    render() {
        return <section className="AboutDescription">
            <div className = "col">
                <div className ="description">
                    <p height = "360px" width = "250px" className="column7">Anna Gawor is a graduate of London College of Fashion successfully completed BA in Fashion Retail Branding and Visual Merchandising. She also has successfully completed a number of management, visual merchandising, design roles. She worked with brands like Hawes & Curtis, H&M, Habitat, Zara, Anthropologie, The Conran Shop she also collaborated with Canadian Embassy.
                    </p>
                   <img src = {"./images/profilePicture.jpg"} height = "350px" width = "200px" alt = "Display1" className = "column8"></img>
                </div>
            </div>

        </section>
    }
}

export default class About extends React.Component {
    render() {
        return <div style={{height: "auto", width:"1200px",}}>
            <AboutArtist/>
            <Description/>
        </div>

    }
}
