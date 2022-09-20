import React from 'react'

const Events = () => {
    return (
        <>
            
        <section className="insbanner evntbanner" >
          <div className="container">
            <div className="insbtxt">
              <h1>LKDF Events</h1>
              <p>A voice and venue to advance the industrial skills <br /> development debate</p>
            </div>
          </div>
        </section>
    
        <section className="abtlkd ptb-80 pgabt">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="lkdabt">
                  <div className="sec-heading">
                    <h4>LKDF </h4>
                    <h2>Events</h2>
                    <p>The Forum of the Learning and Knowledge Development Facility (LKDF) convenes annually under a different theme to uncover the most relevant trends related to demand-oriented industrial skills development.</p>
                    <p>The Forum is an occasion for partners, project teams, training specialists, TVET experts, and interested stakeholders to come together, discuss the importance of skills development, and provide recommendations on ways to assess, develop, and monitor curricula in training activities.
                    </p>
                    <p>The audience comprises a combination of officials, ranging from Ministers (Foreign Affairs, Industry, Trade, and Commerce, etc.) and high-level dignitaries (such as Heads of United Nations agencies and International Organizations). The LKDF Forum especially gathers representatives from the private sector (companies, associations, and organizations) academia (universities and research institutions) and civil society, non-governmental and intergovernmental organizations. </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <div className="abtimg">
                  <img src="images/evtabt.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
    
        

        <section className="edtpro ptb-100">
            <div className="container">
                <div className="d-flex justify-content-between sec-heading">
                    <h2>Latest Editions</h2>

                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active"  data-bs-toggle="pill" data-bs-target="#p2022" >2022</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#p2021" > 2021</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#p2020" > 2020</button>
                    </li>
                    </ul>
                </div>
                <div className="tabsec">
                
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="p2022">
                            <div className="card prcrd">
                                <div className="card-img">
                                    <img src="images/p2022.jpg" alt="" />
                                </div>
                                <div className="card-body">
                                    <h4>LKDF Forum 2022 : Skills for Resilience</h4>
                                    <p>Are We Ready for a Skills Revolution?</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="p2021" >
                            <div className="card prcrd">
                                <div className="card-img">
                                    <img src="images/p2022.jpg" alt="" />
                                </div>
                                <div className="card-body">
                                    <h4>LKDF Forum 2022 : Skills for Resilience</h4>
                                    <p>Are We Ready for a Skills Revolution?</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="p2020" >
                            <div className="card prcrd">
                                <div className="card-img">
                                    <img src="images/p2022.jpg" alt="" />
                                </div>
                                <div className="card-body">
                                    <h4>LKDF Forum 2022 : Skills for Resilience</h4>
                                    <p>Are We Ready for a Skills Revolution?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        </>
      )
}

export default Events