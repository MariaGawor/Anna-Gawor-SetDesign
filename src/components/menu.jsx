import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

class Template extends React.Component {
    render() {
        return <div>
            <Links/> {this.props.children}
        </div>
    }
}

class Logo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:"Anna Gawor Set Design"
        };
    }

    componentDidMount(){
                console.log('componentDidMount');
                this.setIntervalId = setInterval(() => {
                  {this.state.text}style.textDecoration = "underline"
                }, 1000);
            }

            componentWillUnmount(){
                console.log('componentWillUnmount');
                clearTimeout(this.timeoutId);
            }

    render() {
        return <div className="logo">{this.state.text}</div>

    }
}



class Work extends React.Component {
    render() {
        return <div>


            </div>
    }
}

class About extends React.Component {
    render() {
        return <div>
            </div>
    }
}

class Contact extends React.Component {
    render() {
        return <div>

            </div>
    }
}

class Links extends React.Component {
    render() {
        return (

            <div className="main-header-nav">
                <nav className="main-nav">
                    <ul>
                        <li>
                            <IndexLink activeStyle={{
                                fontWeight: 700,
                                color: "#0a0a0a"

                            }} to="/">Projects</IndexLink>
                        </li>
                        <li>
                            <IndexLink activeStyle={{
                                fontWeight: 700,
                                color: "#0a0a0a",
                                decoration: "none"
                            }} to="/">About</IndexLink>
                        </li>
                        <li>
                            <IndexLink activeStyle={{
                                fontWeight: 700,
                                color: "#0a0a0a",
                                visited: "#0a0a0a",

                            }} to="/">Contact</IndexLink>
                        </li>

                    </ul>
                </nav>

            </div>

        )
    }
}

export default class Menu extends React.Component {
    render() {
        return (
            <div style={{
                height: "100px",
                width: "1200px"
            }}>
                <Logo/>


                <Router history={hashHistory}>
                    <Route path="/" component={Template}>
                        <Route path="/" component={Work}/>
                        <Route path="/About" component={About}/>
                        <Route path="/Contact" component={Contact}/>

                    </Route>

                </Router>
            </div>

        )
    }
}
