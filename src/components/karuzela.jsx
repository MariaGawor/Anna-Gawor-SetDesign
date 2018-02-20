import React from 'react';
import ReactDOM from 'react-dom';

export default class Coverflow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <div>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}>
          <img src='images/picture1.png' alt='Album one' data-action="http://passer.cc"/>
          <img src='images/work1.png' alt='Album two' data-action="http://passer.cc"/>
          <img src='images/work3.png' alt='Album three' data-action="https://doce.cc/"/>
          <img src='images/work5.png' alt='Album four' data-action="http://tw.yahoo.com"/>
          <img src='images/work6.png' alt='Album five' data-action="http://www.bbc.co.uk"/>
        </Coverflow>
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};
