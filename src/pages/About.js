import React from 'react'

const About = () => {
  return (
    <>
        
    <section className="insbanner abtbnr" >
      <div className="container">
        <div className="insbtxt">
          <h1>About LKDF</h1>
          <p>We’re promoting and learning from public <br />
            private development partnerships</p>
        </div>
      </div>
    </section>

    <section className="abtlkd ptb-80 pgabt">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="lkdabt">
              <div className="sec-heading">
                <h4>About</h4>
                <h2>LKDF</h2>
                <h5 className='f22 mt-3'>We promote industrial skills development</h5>
                <p>
                The Learning and Knowledge Development Facility (LKDF) is a platform that promotes industrial skills development among young people in emerging economies. Working with the private sector through Public Private Development Partnerships, the LKDF supports the establishment and upgrading of local industrial training academies to help meet the labour market’s increasing demand for skilled employees, ultimately contributing to inclusive and sustainable industrial development.
                </p>
                <p>
                The long-term success of local industrial academies that partner with the LKDF is ensured through constant monitoring of economic, environmental and social impact. UNIDO manages the facility, on behalf of the LKDF partners.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="abtimg">
              <img src="images/about-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="video abtpurps ptb-100 ">
      <div className="container">
        <div className="d-flex  align-items-center sec-heading">
          <h2>LKDF <br /> Purpose</h2>
          <div className="midphed">
            <p>We exist to address the mismatch in skills produced by TVET systems and the skills that are in demand in the labor markets</p>
          </div>
        </div>
        <div className="abtprcard">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card purcard">
                <div className="card-img">
                  <img className='purcard-nhovimg' src="images/icons/vis.png" alt="" />
                  <img className='purcard-hovimg' src="images/icons/vis-w.png" alt="" />
                </div>
                <div className="card-body">
                  <h3>Vision</h3>
                  <p>To capture best practices and summarize and share lessons learned from PPDPs.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card purcard">
                <div className="card-img">
                  <img className='purcard-nhovimg' src="images/icons/mis.png" alt="" />
                  <img className='purcard-hovimg' src="images/icons/mis-w.png" alt="" />
                </div>
                <div className="card-body">
                  <h3>Mission</h3>
                  <p>To provide support and guidance to training managers and decision makers within the host country’s educational training system.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card purcard">
                <div className="card-img">
                  <img className='purcard-nhovimg' src="images/icons/val.png" alt="" />
                  <img className='purcard-hovimg' src="images/icons/val-w.png" alt="" />
                </div>
                <div className="card-body">
                  <h3>Values</h3>
                  <p>To support the development of new PPDPs and ensure the Facility’s long-term success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="abtvideo ptb-100">
      <div className="container">
        <a href="javascript:void(0)"><img src="images/about-vid.jpg" alt="" /></a>
      </div>
    </section>

    {/* <section className="abtteam ptb-100">
      <div className="container">
        <div className="sec-heading">
          <h2>Our Team</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card tcard">
              <div className="card-img">
                <img src="images/t1.jpg" alt="" />
                <div className="thovsh">
                <p>Communications Lead</p>
                </div>
              </div>
              <div className="card-body">
                <h5>Mattias Larsen</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card tcard">
              <div className="card-img">
                <img src="images/t2.jpg" alt="" />
                <div className="thovsh">
                <p>Communications Lead</p>
                </div>
              </div>
              <div className="card-body">
                <h5>Karin Monaco</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card tcard">
              <div className="card-img">
                <img src="images/t3.jpg" alt="" />
                <div className="thovsh">
                <p>Communications Lead</p>
                </div>
              </div>
              <div className="card-body">
                <h5>Anna Jardanovsky</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card tcard">
              <div className="card-img">
                <img src="images/t4.jpg" alt="" />
                <div className="thovsh">
                <p>Communications Lead</p>
                </div>
              </div>
              <div className="card-body">
                <h5>Sophie Nedlin</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section className="abtfaq ptb-100 pt-0">
      <div className="container">
        <div className="sec-heading">
          <h4>Faq </h4>
          <h2>Frequently asked questions</h2>
          <h5 className='f22 mt-3'>About Public Private Development Partnerships (PPDP)</h5>
        </div>
        <div className="col-12 col-md-12 col-lg-10">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" >
                What is a PPDP?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>A Public Private Development Partnership (PPDP) is a variation of the Public Private Partnership (PPP) model. In a PPDP, the public and private sectors make a joint investment in a project implemented by a third party. The development objective is to create conditions that improve the lives of people living in poverty.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" >
                What is the difference between a PPP and a PPDP
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>A Public Private Development Partnership (PPDP) is a variation of the Public Private Partnership (PPP) model. In a PPDP, the public and private sectors make a joint investment in a project implemented by a third party. The development objective is to create conditions that improve the lives of people living in poverty.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" >
                Why the PPDP approach?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>A Public Private Development Partnership (PPDP) is a variation of the Public Private Partnership (PPP) model. In a PPDP, the public and private sectors make a joint investment in a project implemented by a third party. The development objective is to create conditions that improve the lives of people living in poverty.</p>
                </div>
              </div>
            </div>

            <h5 className='f22 mt-5'>About the LKDF</h5>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#colp4" >
                Does the LKDF provide financing for PPDP projects?Why the PPDP approach?
                </button>
              </h2>
              <div id="colp4" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>A Public Private Development Partnership (PPDP) is a variation of the Public Private Partnership (PPP) model. In a PPDP, the public and private sectors make a joint investment in a project implemented by a third party. The development objective is to create conditions that improve the lives of people living in poverty.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#colp5" >
                Why UNIDO and what is UNIDO's role?
                </button>
              </h2>
              <div id="colp5" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>A Public Private Development Partnership (PPDP) is a variation of the Public Private Partnership (PPP) model. In a PPDP, the public and private sectors make a joint investment in a project implemented by a third party. The development objective is to create conditions that improve the lives of people living in poverty.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#colp6" >
                How are we capturing and sharing learning and why?
                </button>
              </h2>
              <div id="colp6" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>A Public Private Development Partnership (PPDP) is a variation of the Public Private Partnership (PPP) model. In a PPDP, the public and private sectors make a joint investment in a project implemented by a third party. The development objective is to create conditions that improve the lives of people living in poverty.</p>
                </div>
              </div>
            </div>

            <h5 className='f22 mt-5'>Joining the LKDF</h5>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#colp7" >
                What is expected of the private sector partners?
                </button>
              </h2>
              <div id="colp7" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>A Public Private Development Partnership (PPDP) is a variation of the Public Private Partnership (PPP) model. In a PPDP, the public and private sectors make a joint investment in a project implemented by a third party. The development objective is to create conditions that improve the lives of people living in poverty.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#colp8" >
                What are the benefits of joining the LKDF for private partners?
                </button>
              </h2>
              <div id="colp8" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>A Public Private Development Partnership (PPDP) is a variation of the Public Private Partnership (PPP) model. In a PPDP, the public and private sectors make a joint investment in a project implemented by a third party. The development objective is to create conditions that improve the lives of people living in poverty.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#colp9" >
                What are the boundaries of the LKDF?
                </button>
              </h2>
              <div id="colp9" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>A Public Private Development Partnership (PPDP) is a variation of the Public Private Partnership (PPP) model. In a PPDP, the public and private sectors make a joint investment in a project implemented by a third party. The development objective is to create conditions that improve the lives of people living in poverty.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#colp10" >
                How to become involved?
                </button>
              </h2>
              <div id="colp10" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>A Public Private Development Partnership (PPDP) is a variation of the Public Private Partnership (PPP) model. In a PPDP, the public and private sectors make a joint investment in a project implemented by a third party. The development objective is to create conditions that improve the lives of people living in poverty.</p>
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

export default About;