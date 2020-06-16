import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">

                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>CDK GLOBAL<span>2018-2020</span></h2>
                        <p>From The Past 1.5 Years I am working in  CDK.I am working for North American Dealers in CDK.Skilled on Data Visualization in 			Tableau 2020.1 and Forecasting the Installs,Dealer Sales, Cycle time for a Project.Worked on DMS Setups.</p>
                      </div>
                    </div>
                  </article>

                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Accenture<span>2017-2018</span></h2>
                        <p>Involved in Webcode Debugging(HTML,CSS and JS) and Inspected the elements of website and ADtags.Performed Detail Technical Research on 			Adserving issues and Provided Technical Support to Webpages</p>
                        {/* <p>. I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.I have also been part of S.B.G.(Student Body Govenance) scince my first year of college.</p> */}
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Value Momentum <span>2016-2017</span></h2>
                        <p>Worked for NSM Insurance Project.Involved in the creation of JSON Files and Integrated through SOAP and POSTMAN APIs.</p>
                      </div>
                    </div>
                  </article>
            
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>MVSR Engineering college<span>2012-2016</span></h2>
                        <p>I Did my Graduation studies with major in Computer Science. I have taken courses like DSA, OOPs, Computer Networks,Software Engineering over the years and have better understanding of these subjects.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
