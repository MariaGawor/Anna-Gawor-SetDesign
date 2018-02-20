import React from 'react';
import ReactDOM from 'react-dom';
import Menu from "./components/menu.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import SimpleSlider from "./components/projects.jsx";
import './scss/main.scss';



class App extends React.Component {
  render() {
    return <div><Menu/>
    <SimpleSlider/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
}
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
