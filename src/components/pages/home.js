import React, { Component } from "react";
import Header from "../nav-components/header";
import Footer from "../nav-components/footer"


export default class Home extends Component {
  render() {
    return (
      <div className='home-body'>
        <Header/>
        <div className="first-txt">
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
            <div className="top">
              <b>Instrument:</b> &emsp; Secured Promissory Note.<br/>
              <b>Security:</b> &emsp; &emsp; &nbs;Senior position in an undivided interest in the pool of ISA’s. (See below).<br/>
              <b>Amount:</b> &emsp; &emsp; $100,000 or more.<br/>             
            </div>
            <div className="mid">
              The three term / yield options:
            </div>
            <div className="bot">
              <b>Term:</b>  &emsp;2 years &emsp;3 years &emsp; 4 years <br/>
              <b>Interest:</b> &emsp;8% &emsp; &emsp; &nbsp;9% &emsp; &emsp; &nbsp;10%
            </div>
          </div>
        </div>

        <div className="second-txt">
          <h2>
            <u>Security Description:</u>
          </h2>
          <div>
            The security assets are Income Share Agreements (ISA’s). In general terms, these are defined as:
          </div>
          <p className="income">
            <i>An Income Share Agreement is a form of revenue-based investing, where an investor provides capital to
            an individual or a company and that capital is invested in a way that improves the income of the
            recipient, while the investor takes an agreed percentage of the income for a specified period of time as
            payback.</i>
          </p>
          <p>
            Bottega’s students have the option to finance their coursework by executing an ISA. It must be noted these
            are <u>not</u> “student loans” in the traditional sense. ISA’s are, in essence, a joint venture between the student and
            the school with Bottega receiving a guaranteed percentage of the student’s gross income once they are hired
            and become an employed worker. There are significant terms that increase the security and value of these ISA
            assets over more traditional loans, including:
          </p>
          <ol>
            <li>
              Bottega’s block of ISA’s consists of hundreds of smaller contracts, making them highly resistant to individual contract issues.
            </li>
            
            <br/>

            <li>
              ISA terms range from 24 to 48 monthly payments and generate greater revenues than standard amortization loans, increasing the revenue of an ISA contract over traditional loans.
            </li>

            <br/>

            <li>
              The additional $1 million each month will increase the value and security of the pool.
            </li>

            <br/>

            <li>
              There is a ready and established market for ISA contracts, allowing liquidation in under 90-days.
            </li>

            <br/>

            <li>
              Payments can be deducted directly from the employee’s paycheck and sent to Bottega, eliminating payment issues from individuals.
            </li>

            <br/>

            <li>
              The requirement is for a specific number of payments at a percentage of their gross income; hence, any unemployment only delays payment and does not reduce the obligation.
            </li>

            <br/>

            <li>
              Bankruptcy discharge is impossible due to the nature of revenue share contracts under U.C.C
            </li>

            <br/>

            <li>
              Payment revenue increases over time as they get a raise or a better job.
            </li>

            <br/>

            <li>
             Bottega has multiple accreditations, dramatically improving the value of a graduate in the job market versus most non-accredited, post-secondary occupational training institutions.
            </li>

            <br/>

            <li>
              The market for Bottega’s graduates is highly underserved by almost 10 to 1, essentially guaranteeing an immediate job and starting the income stream.
            </li>

            <br/>

            <li>
              As the Fund manages the ISA’s, any potentially adverse financial situations of Bottega itself have no effect on the security pledge.
            </li>

            <br/>

            <li>
             The investor will receive monthly statements detailing their account and general status of the fund as a whole.
            </li>
          </ol>
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
            <li>
              Note terms are equal to or longer than the ISA cash flows to accumulate the principal.
            </li>
            <li>
              Cost of capital and principal combined are below the ISA cash flow total;
            </li>
            <li>
              Allocation of twice the ISA’s, and hence the cash flow, needed per note; and 
            </li>
            <li>
              Replacement of any non-performing ISA’s with performing ones
            </li>
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
            <li>
              The note’s 2/1 security significantly exceeding the repayment amount;
            </li>
            <li>
              The relatively short sale time;
            </li>
            <li>
              The significant monthly increase in the ISA portfolio from Bottega’s activities; and
            </li>
            <li>
              The already significant and growing market demand for ISA contracts.
            </li>
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