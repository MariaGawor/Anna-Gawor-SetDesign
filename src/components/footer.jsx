import React from 'react';
import ReactDOM from 'react-dom';



class CopyRights extends React.Component {
    constructor(){
        super();
        this.state = {
            text: "code and design by Maria Gawor",
        }
    }
render(){
    return <div className = "CopyRights">{this.state.text}</div>

}
}

class SocialMedia extends React.Component {
render(){
    return (<div className = "socialMedia">
        <a href="https://www.instagram.com/agawor_setdesign/"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
        <a href = "https://www.linkedin.com/in/anna-gawor-84478942/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
<a href = "https://www.etsy.com/shop/ScrtgrdnCreations"><i className="fa fa fa-etsy fa-2x" aria-hidden="true"></i></a>
    </div>);
}
}




 export default class Footer extends React.Component {
    render(){
        return <div style = {{
                height: "45px",
                width:"1200px",
                marginTop: "-30px"
            }}>
            <CopyRights/>
            <SocialMedia/>
        </div>

        }
}
