import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='header-body'>
        <div className="first-logo">
          <img src="../../../static/assets/images/equity.jpg" alt="equity"/>
        </div>

        <div  className="bottega-logo" >
          <a href="https://bottega.tech/" target="_blank">
            <img src="../../../static/assets/images/Bottega-logo.png" alt="bottega"/>
          </a>
        
          <div className="typewriter">
            <h1>Perpetual Endowment Fund</h1>
          </div>

        </div>
      </div>
    );
  }
}