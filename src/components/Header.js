import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isActive, setActive] = useState(false);
  const toggleClass = () =>{
    setActive(!isActive);
  };
  return (
    <>
        <header className='header-section' >
        <div className="container">
            <nav className="navbar navbar-expand-lg p-0">
                <a className="navbar-brand" href="#" >
                    <img src="images/logo.png" alt="" />
                </a>
                <a href="javascript:void(0)" className='serchmbl' onClick={toggleClass}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                  </button>
                                                    
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                  <ul>
                  <li className='dropdmenu'>
                    <a href="javascript:void(0)" className=''>About LKDF <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg></a>
                    <div className="drop-contain">
                      <ul>
                      <li className='indrop'>
                        {/* <a href="#">ABOUT LKDF</a> */}
                        <Link to='/about'>ABOUT LKDF</Link>
                        <div className="inndropcont active">
                          <div className="dropcnt">
                            <h3>ABOUT LKDF</h3>
                            <p>The LKDF is a platform that promotes industrial skills development among young people in emerging economies. Learn more about us and our work.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/abtlkdf.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                      <li className='indrop'><a href="#">LKDF PURPOSE</a>
                      <div className="inndropcont">
                          <div className="dropcnt">
                            <h3>LKDF PURPOSE</h3>
                            <p>Human development is about expanding the richness of human life, rather than simply the richness of the economy in which human beings live. It is an approach that is focused on people and their opportunities and choices.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/lkdpur.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                      {/* <li className='indrop'><a href="#">OUR TEAM</a>
                        <div className="inndropcont">
                          <div className="dropcnt">
                            <h3>OUR TEAM</h3>
                            <p>The Sustainable Development Goals (SDGs), otherwise known as the Global Goals, are a universal people enjoy peace and prosperity.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/outm.jpg" alt="" />
                          </div>
                        </div>
                      </li> */}
                      <li className='indrop'><a href="#">FAQ</a>
                        <div className="inndropcont">
                          <div className="dropcnt">
                            <h3>FAQ</h3>
                            <p>The Sustainable Development Goals (SDGs), otherwise known as the Global Goals, are a universal people enjoy peace and prosperity.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/faq.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to='/project_details'>Projects</Link>
                  </li>
                  <li className='dropdmenu'><a href="javascript:void(0)">Partnering <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg></a>
                  <div className="drop-contain">
                      <ul>
                      <li className='indrop'>
                        <Link to='/partnering'>PPDPs</Link>
                        <div className="inndropcont active">
                          <div className="dropcnt">
                            <h3>PPDPs</h3>
                            <p>The Sustainable Development Goals (SDGs), otherwise known as the Global Goals, are a universal call to action to end poverty, protect the planet and ensure that all people enjoy peace and prosperity.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/ppdp_menu.png" alt="" />
                          </div>
                        </div>
                      </li>
                      <li className='indrop'><a href="#">JOIN LKDF</a>
                      <div className="inndropcont">
                          <div className="dropcnt">
                            <h3>JOIN LKDF</h3>
                            <p>Human development is about expanding the richness of human life, rather than simply the richness of the economy in which human beings live. It is an approach that is focused on people and their opportunities and choices.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/dropm6.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                      <li className='indrop'><a href="#">PARTNERS</a>
                        <div className="inndropcont">
                          <div className="dropcnt">
                            <h3>PARTNERS</h3>
                            <p>The Sustainable Development Goals (SDGs), otherwise known as the Global Goals, are a universal people enjoy peace and prosperity.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/partners_menu.png" alt="" />
                          </div>
                        </div>
                      </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to='/events'>Events</Link>
                  </li>
                  <li><a href="">Resources       </a></li>
                  <li><a href="">Videos</a></li>
                  <li><a href="">News</a></li>
                  <li className='dmdnone'><a href="javascript:void(0)" onClick={toggleClass}  ><img src="images/icons/search.png" alt="" /></a></li>
                  </ul>
                </div>
              </nav>
        </div>
    </header>

<section style={{display:'none'}}  className={isActive ? 'searchActive searchsct bg-light': null} >
<div className="container">
  <form action="">
    <div className="serow">
      <div className="serinp">
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        </span>
        <input type="text" className='form-control' placeholder='Search by Keywords' />
        <span className="input-group-text" id="basic-addon2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </span>
      </div>
      </div>
      <div className="sertg">
        <ul className='ulmnon'>
          <li><a href="#" className='active'>Events</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">News</a></li>
        </ul>
        <select name="" className='form-control sldnon text-center' id="">
          
          <option value="">Events</option>
          <option value="">Resources</option>
          <option value="">Videos</option>
          <option value="">News</option>
        </select>
      </div>
    </div>
  </form>
</div>
</section>
    </>
  )
}

export default Header;