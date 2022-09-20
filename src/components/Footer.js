import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="flinks">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="">About LKDF</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Partnering</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Videos</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5">
            <div className="fform">
              <h3 >Newsletter</h3>
              <p>Subscribe to get special offers, free giveaways,  and once-in-a-lifetime deals.</p>
              <form action="#">
                <div className="input-group align-items-center">
                  <input type="text" className='form-control bg-transparent  rounded-0' placeholder='your email' name="" id="" />
                    <button className='btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                    </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-3">
            <div className="fadd">
              <h3>Contact</h3>
              <ul>
                <li>LKD Facility - UNIDO
                    Wagramerstrasse 5
                    A-1400 Vienna
                </li>
                <li>
                  <span>E :</span>
                  <a href="mailto:lkd-facility@unido.org">&nbsp;  lkd-facility@unido.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fbottm">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
              <div className="fbico">
                <ul>
                  <li>
                    <img src="images/icons/unido.png" alt="" />
                  </li>
                  <li className='ficolst'>
                    <img src="images/icons/sida.png" alt="" />
                  </li>
                  <li>
                    <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                    </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <div className="fright">
                <ul>
                  <li>© 2022, lkdfacility.org | All rights reserved.     </li>
                  <li>Website Designed/Developed by <a href="#" className='text-decoration-underline'>SynapseIndia®</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;