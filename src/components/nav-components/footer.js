import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-body'>
        <div className="notice">
          <h1>
            <br/>
            <b>NOTICE</b>
          </h1>
          <p>
            This document is for informational purposes only and is neither an offer to sell nor a solicitation to buy any securities, subscriptions, equities, or ownerships. Any representation to the contrary is unlawful. This information is privileged and confidential, and not intended, nor should it be distributed, for advertising or marketing purposes, nor is it intended for publication or broadcast to the public. Unauthorized reproduction or distribution of this document or any of its contents in any form or under any circumstances without prior written consent is prohibited. All information herein is subject to change without notice.
          </p>
        </div>
        <div className="address">
          <a href="https://www.google.com/maps/place/341+S+Main+St+%23200,+Alpine,+UT+84004/@40.4488336,-111.7775725,19.17z/data=!4m5!3m4!1s0x87527f58e1e24abb:0x4c0a21b3d5cd2be8!8m2!3d40.4489999!4d-111.7776124" target="blank">
            <i>Equity Address: 341 South Main Street, Suite 200, Alpine, Utah 84004</i>
          </a>       
        </div>
      </div>
    );
  }
}