import React, { Component } from "react";
import Header from "../nav-components/header";
import Footer from "../nav-components/footer"
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';


export default class Home extends Component {
  render() {
    return (
      <div className='home-body'>
        <Header/>
        
        <div className="first-txt" id="first-txt" >
          <h1>SUMMARY</h1>
          
          <p>It is our pleasure to describe the general terms of our financing plan. If you desire more information, please
          contact us as listed on the next page</p>

          <p>Equity Capital Fund, Series E (the “Fund”) is a Utah limited liability company dedicated to act as an asset and
          endowment management entity for the education company, Bottega LLC, which includes a 4-year, accredited
          college, an online learning platform, and other assets. In this capacity, the Fund is seeking to issue secured
          promissory notes to select investors in order to monetize Bottega’s income stream from semi-liquid, income
          producing assets. The notes would be secured by these assets. The Fund currently has over $4 million in such
          assets, with an approximately $1 million per month increase scheduled for the year. The proposed terms are
          below.</p>

          <div className="square">
          <Slide right>
            <div className="top">
              <div className ="isa1"><b>Instrument:</b></div> 
              <div className ="isa">Secured Promissory Note. <br/></div>
              <div className ="isa1"><b>Security:</b></div>
              <div className ="isa"> Senior position in an undivided interest in the pool of ISA’s <a href="#security">(See below).</a></div>
              <div className ="isa1"><b>Amount:</b></div>
              <div className ="isa">$100,000 or more.</div>             
            </div>
            <div className="mid">
              The three term / yield options:
            </div>
            <div className="bot">
              <div className="bot1"><b>Term:</b></div>
               <div className="bot2">
                  <dv>2 years</dv>
                  <dv>3 years</dv>
                  <dv>4 years</dv>
               </div>
               
              <div className="bot1"><b>Interest:</b></div> 
                <div className="bot2">
                  <div>8% </div>
                  <div>9% </div>
                  <div>10%</div>
                </div> 
            </div>
          </Slide>
          </div>
        </div>
        
        <div className="second-txt" id="second-txt">
          <h2 id="security">
            <u>Security Description:</u>
          </h2>

          <Fade bottom>
          <p className="security">
            The security assets are Income Share Agreements (ISA’s). In general terms, these are defined as:
          </p>

          <p className="income">
            <i>An Income Share Agreement is a form of revenue-based investing, where an investor provides capital to
            an individual or a company and that capital is invested in a way that improves the income of the
            recipient, while the investor takes an agreed percentage of the income for a specified period of time as
            payback.</i>
          </p>
          </Fade>
          <div className="mid-bg">
            <p>
              Bottega’s students have the option to finance their coursework by executing an ISA. It must be noted these
              are <u>not</u> “student loans” in the traditional sense. ISA’s are, in essence, a joint venture between the student and
              the school with Bottega receiving a guaranteed percentage of the student’s gross income once they are hired
              and become an employed worker. There are significant terms that increase the security and value of these ISA
              assets over more traditional loans, including:
            </p>
            
            <ol>
            
            <br/>
            
            <Flip top>
              
                <li>
                  Bottega’s block of ISA’s consists of hundreds of smaller contracts, making them highly resistant to individual contract issues.
                </li>
              </Flip>

              <Flip top>
                <li>
                  ISA terms range from 24 to 48 monthly payments and generate greater revenues than standard amortization loans, increasing the revenue of an ISA contract over traditional loans.
                </li>
              </Flip>
      
              <Flip top>
                <li>
                  The additional $1 million each month will increase the value and security of the pool.
                </li>
              </Flip>

              <Flip top>
                <li>
                  There is a ready and established market for ISA contracts, allowing liquidation in under 90-days.
                </li>
              </Flip>

              <Flip top>
                <li>
                  Payments can be deducted directly from the employee’s paycheck and sent to Bottega, eliminating payment issues from individuals.
                </li>
              </Flip>

              <Flip top>
                <li>
                  The requirement is for a specific number of payments at a percentage of their gross income; hence, any unemployment only delays payment and does not reduce the obligation.
                </li>
              </Flip>

              <Flip top>
                <li>
                  Bankruptcy discharge is impossible due to the nature of revenue share contracts under U.C.C
                </li>
              </Flip>

              <Flip top>
                <li>
                  Payment revenue increases over time as they get a raise or a better job.
                </li>
              </Flip>

              <Flip top>
                <li>
                Bottega has multiple accreditations, dramatically improving the value of a graduate in the job market versus most non-accredited, post-secondary occupational training institutions.
                </li>
              </Flip>

              <Flip top>
                <li>
                  The market for Bottega’s graduates is highly underserved by almost 10 to 1, essentially guaranteeing an immediate job and starting the income stream.
                </li>
              </Flip>

              <Flip top>
                <li>
                  As the Fund manages the ISA’s, any potentially adverse financial situations of Bottega itself have no effect on the security pledge.
                </li>
              </Flip>

              <Flip top>
                <li>
                The investor will receive monthly statements detailing their account and general status of the fund as a whole.
                </li>
              </Flip>
              <br/>
            
            </ol>
          </div>
        </div>

        <div className="thirt-txt">
          <h2><b>Repayment Security</b></h2>
          <p>
            In summary, the notes offered by the Fund are secured by two mechanisms, each of which is capable of note repayment:
          </p>
          <p>
            <u>Cash flow.</u> The ISA’s generate income well over their initial face value during the life of their payment series.
            Therefore, the program was structured take advantage of this for security as follows:
          </p>
          <ul className="chash-flow-list">

          <Slide right>
            <li>
              Note terms are equal to or longer than the ISA cash flows to accumulate the principal.
            </li>
          </Slide>

          <Slide right>
            <li>
              Cost of capital and principal combined are below the ISA cash flow total;
            </li>
          </Slide>

          <Slide right>
            <li>
              Allocation of twice the ISA’s, and hence the cash flow, needed per note; and 
            </li>
          </Slide>

          <Slide right>
            <li>
              Replacement of any non-performing ISA’s with performing ones
            </li>
          </Slide>

          </ul>
          <p>
            Therefore, the <u>ISA cash flows alone</u> have the ability to recover all funds needed to repay the note.
          </p>

          <p>
            <u>Sale of ISA’s</u>. The ISA contracts can be sold for a major fraction of their value. There are a number of substantial institutional buyers of ISA contracts seeking to acquire ISA’s because of their reliable, low risk cash flow, so there is a ready market for factoring ISA’s. We have received recent offers of 70% to 80% for up to $30 million in contracts. As the Fund allocates the ISA security on a 2-to-1 basis, this translates into 140% to 160% of the note obligation. Selling a block of ISA contracts can be done in as little as 30 days.
          </p>
          <p>
            Therefore, a good basis for recovery of the principal and any interest due, if necessary, is provided by the combination of:
          </p>
          <ul className="sales-isa-list">

          <Slide right>
            <li>
              The note’s 2/1 security significantly exceeding the repayment amount;
            </li>
          </Slide>

          <Slide right>
            <li>
              The relatively short sale time;
            </li>
          </Slide>

          <Slide right>
            <li>
              The significant monthly increase in the ISA portfolio from Bottega’s activities; and
            </li>
          </Slide>

          <Slide right>
            <li>
              The already significant and growing market demand for ISA contracts.
            </li>
          </Slide>

          </ul>

        </div>
 
        <div className="more-info">
          <h2 className="formore-info">
           <b>For more information, contact:</b> 
          </h2>
          <p className="contact-info">
            Robert Wagner, Series Manager<br/>
            rwagner@equitycapital.fund<br/>
            (818) 339-7769
          </p>
        </div>
        <Footer/>
      </div>
    );
  }
}