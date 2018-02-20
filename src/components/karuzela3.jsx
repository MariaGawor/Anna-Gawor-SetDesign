import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";


 class Slider1 extends React.Component {
     constructor(){
         super();
       this.state = {
         dots: true,
         infinite: true,
         speed: 20000,
         slidesToShow: 1,

       };
   }
   render(){
       return  (<Slider className = "slider1">
           <div><img src = {"Leopold.png"} height = "500px" width = "600px" alt = "Leopold"></img></div>
           <div><img src = {"./images/picture1.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
           <div> <img src = {"./images/wystawa1.png"} height = "500px" width = "600px" alt = "Leopold" ></img></div>
           <div> <img src = {"./images/wystawa2.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
       </Slider>
   )
   }
     };

     class Slider1 extends React.Component {
         constructor(){
             super();
           this.state = {
             dots: true,
             infinite: true,
             speed: 20000,
             slidesToShow: 1,

           };
       }
       render(){
           return  (
               <div><Slider className = "slider1">
               <div><img src = {"Leopold.png"} height = "500px" width = "600px" alt = "Leopold"></img></div>
               <div><img src = {"./images/picture1.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
               <div> <img src = {"./images/wystawa1.png"} height = "500px" width = "600px" alt = "Leopold" ></img></div>
               <div> <img src = {"./images/wystawa2.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
           </Slider>
       )
       }
         };





export default class SimpleSlider extends React.Component {
    render(){
        return <Slider1/>

    }
};
