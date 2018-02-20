import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
render(){
    return <div className = "ContactInfo">Contact Info</div>

}
}

class Name extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                textarea : 'name',
            };
        }

        handleNameChange = event => {
            this.setState({
                name:event.target.value,
                info: isValid? "":"Please fill in missing information",
            });
        };


        render(){
            return <div>

                <textarea type="text" value={this.state.name} onChange={this.handleNameChange} className = "name">Name</textarea>
        </div>
        }
    }


    class Email extends React.Component {
        constructor(props){
            super(props);
            this.state = {
             textarea: "email",
            };
        }

        handleEmailChange = event => {
            const isValid = event.target.value.indexOf("@") > -1;
            this.setState({
                email:event.target.value,
                info: isValid2? "":"Please fill in missing information"

            });
        };


        render(){
            return <div>

                <textarea type="" value={this.state.email} onChange={this.handleEmailChange} className = "email">Email</textarea>


        </div>
        }
    }



    class Textarea extends React.Component {
        constructor(props){
            super(props);
            this.state = {
            textarea : "Message",
            };
        }

        handleTextareaChange = event => {
            const isValid3 = event.target.value.length > 0;
            this.setState({
                textarea:event.target.value,
                info: isValid3? "" :"Please fill in missing information"

            });
        };


        render(){
            return <div>

                <textarea  value={this.state.textarea} onChange={this.handleTextareaChange} className="TextArea"/>


        </div>
        }
    }

    class Submit extends React.Component {
        constructor(props){
            super(props);
            this.state = {
             submit:"Submit",
            };
        }

        handleSubmitChange = event => {
            e.preventDefault();
            if (this.state.name.length>0 && this.state.email.length>0 && this.state.email.indexOf("@")> -1){
                this.setState({
                    info: "Thank you for your message. We will contact you as soon as possible",
                    isValidAll: true,
                })
            }

        };


        render(){
            return <div>
                <button value={this.state.submit} onClick={this.handleSubmitChange} className = "send">{this.state.submit}</button>
        </div>
        }
    }

    class ContactForm extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                name: "",
                email: "",
                message: "",
                info: "",
                isValidAll: false
            };
        }
        handleSubmit = e => {
            e.preventDefault();
            if(this.state.name.length > 0 && this.state.email.length >0 && this.state.email.indexOf("@")> -1) {
                this.setState({
                    info:"Your message has been sent I will contact you as soon as possible",
                    isValidAll: true,
                })
            }
        }
    render() {
        return <div className = "ContactForm">
            <Name
                name={this.props.name}/>

            <Email
                email={this.props.email}/>

            <Textarea
                textarea ={this.props.textarea}/>

            <Submit
                submit = {this.props.submit}
                info = {this.props.info}/>
        </div>;
    }
}


class Details extends React.Component{
    constructor(){
        super();
        this.state = {
            UkContact : "To get in touch regarding possible collaborations",
            UkEmail : "anna.gawor@hotmail.com",
            UkPhone : "+44 7856 864398",
            PlContact : "Representation in Poland",
            PlEmail : "malgosia.gawor@gmail.com",
            PlPhone : "+48 600 264 910",
        }
    }
    render(){
        return <div className = "details">
<div className = "UkContact"> {this.state.UkContact}</div>
<div className = "UkEmail">email:   {this.state.UkEmail}</div>
<div className = "UkPhone">phone:   {this.state.UkPhone}</div>
<br></br>
<br></br>
<div className = "PlContact">{this.state.PlContact}</div>
<div className = "PlEmail">email:  {this.state.PlEmail}</div>
<div className = "PlPhone">phone:  {this.state.PlPhone}</div>
        </div>
    }
}

class FullContact extends React.Component{
    render(){
        return (<div className = "containerContact">
    <Form/>
              <div className = "col-1-2-Contact">
                <ContactForm className = "contactForm"></ContactForm>
                <Details className = "details"></Details>
                <div className = "row1"></div>
              </div>

</div>)
    }
}


 export default class Contact extends React.Component {
    render(){
        return <div style = {{
                height: "650px",
                width:"1200px",}}>
            <FullContact/>

        </div>

        }
}
