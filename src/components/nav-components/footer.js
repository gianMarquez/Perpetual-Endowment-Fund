import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-body'>
        <div className="notice">
          <h1>
            <b>NOTICE</b>
          </h1>
          <p>
            This document is for informational purposes only and is neither an offer to sell nor a solicitation to buy any securities, subscriptions, equities, or ownerships. Any representation to the contrary is unlawful. This information is privileged and confidential, and not intended, nor should it be distributed, for advertising or marketing purposes, nor is it intended for publication or broadcast to the public. Unauthorized reproduction or distribution of this document or any of its contents in any form or under any circumstances without prior written consent is prohibited. All information herein is subject to change without notice.
          </p>
        </div>
        <div className="address">
          <i>341 South Main Street, Suite 200, Alpine, Utah 84004</i>
        </div>
      </div>
    );
  }
}