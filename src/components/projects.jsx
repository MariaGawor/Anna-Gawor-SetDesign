import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import {Container, Row, Col } from "react-grid-system";


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
       return (<div className = "container">
         <div className = "col-1-2">
       <Slider className = "slider1">
           <div>
               <img src = {"./images/Leopold1.png"} height = "500px" width = "600px" alt = "Leopold"></img>
           <div className = "imageStart1">Whale Display</div>
           </div>
           <div><img src = {"./images/Leopold1.png"} height = "500px" width = "600px" alt = "Leopold"></img></div>
           <div><img src = {"./images/Leopold2.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
           <div> <img src = {"./images/Leopold3.png"} height = "500px" width = "700px" alt = "Leopold" ></img></div>
   </Slider>
 <Slider className = "slider2">
     <div><img src = {"./images/ChristmasDisplay7.png"} height = "500px" width = "600px" alt = "Leopold"></img>
       <div className = "imageStart2">Christmas Display</div>
     </div>
     <div><img src = {"./images/ChristmasDisplay7.png"} height = "500px" width = "600px" alt = "Leopold"></img></div>
     <div><img src = {"./images/ChristmasDisplay6.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
     <div> <img src = {"./images/ChristmasDisplay5.png"} height = "500px" width = "650px" alt = "Leopold" ></img></div>
     <div> <img src = {"./images/ChristmasDisplay4.png"} height = "500px" width = "650px" alt = "Display1" ></img></div>
</Slider>
<div className = "row1"></div>
</div>

<div className = "col-1-2">
<Slider className = "slider3">
    <div><img src = {"./images/Kaktusy1.png"} height = "500px" width = "600px" alt = "Leopold"></img>
    <div className = "imageStart3">Cacti Display</div>
    </div>
  <div><img src = {"./images/Kaktusy1.png"} height = "500px" width = "600px" alt = "Leopold"></img></div>
  <div><img src = {"./images/Kaktusy2.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
  <div> <img src = {"./images/Kaktusy3.png"} height = "500px" width = "600px" alt = "Leopold" ></img></div>
  <div> <img src = {"./images/Kaktusy4.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
</Slider>
<Slider className = "slider4">
    <div><img src = {"./images/flowers10.png"} height = "500px" width = "600px" alt = "Leopold"></img>
    <div className = "imageStart4">Flowers Display</div>
    </div>
<div><img src = {"./images/flowers10.png"} height = "500px" width = "600px" alt = "Leopold"></img></div>
<div><img src = {"./images/flowers11.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div> <img src = {"./images/flowers12.png"} height = "500px" width = "600px" alt = "Leopold" ></img></div>
<div> <img src = {"./images/flowers5.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div className = "row2"></div>
</Slider>
</div>

<div className = "col-1-2">
<Slider className = "slider5">
    <div><img src = {"./images/colorDisplay1.png"} height = "500px" width = "650px" alt = "Leopold"></img>
    <div className = "imageStart5">Ink blot Display</div>
    </div>
    <div><img src = {"./images/colorDisplay1.png"} height = "500px" width = "650px" alt = "Leopold"></img></div>
    <div><img src = {"./images/colorsDisplay.png"} height = "500px" width = "650px" alt = "Display1" ></img></div>
    <div> <img src = {"./images/picture1.png"} height = "500px" width = "650px" alt = "Leopold" ></img></div>
</Slider>
<Slider className = "slider6">
    <div><img src = {"./images/props1.png"} height = "500px" width = "600px" alt = "Leopold"></img>
    <div className = "imageStart6">Props</div>
    </div>
<div><img src = {"./images/props1.png"} height = "500px" width = "600px" alt = "Leopold"></img></div>
<div><img src = {"./images/props2.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div> <img src = {"./images/props3.png"} height = "500px" width = "600px" alt = "Leopold" ></img></div>
<div> <img src = {"./images/props4.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div> <img src = {"./images/props5.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div> <img src = {"./images/props6.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div> <img src = {"./images/props7.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div> <img src = {"./images/props8.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div> <img src = {"./images/props9.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div> <img src = {"./images/props10.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div> <img src = {"./images/props13.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div> <img src = {"./images/props14.png"} height = "500px" width = "600px" alt = "Display1" ></img></div>
<div className = "row2"></div>
</Slider>
</div>



   </div>)
   }
     };

export default class SimpleSlider extends React.Component {
    render(){
        return <Slider1/>

    }
};
