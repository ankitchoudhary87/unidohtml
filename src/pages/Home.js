import React from 'react';
import { Navigation,   A11y } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
    
  return (
    <>
        

<section className="bannertxt">
<video  width="100%"  autoPlay={true} loop={true} muted playsInline={true}>
<source src="images/home-video.webm" type="video/webm" />
</video> 
<div className="container">
 <div className="bnrtxt" >
   <h1 data-aos="fade-up"
   data-aos-anchor="#example-anchor"
   data-aos-offset="500"
   data-aos-duration="800">Industrial <br />
   skills for the future</h1>
   <p>Learn about Industry 4.0 from the industries leading the way</p>
   <a href="#" className='btn btn-blue-banner'>How to Get Involved <img src="images/icons/arrow-next.png" alt="" /></a>
 </div>
</div>
</section>

<section className="highlt ptb-80">
<div className="container">
 <div className="sec-heading">
   <h2>Highlights</h2>
 </div>
 <div className="row">
   <div className="col-12 col-md-12 col-lg-4">
     <div className="bgbtntxt">
       <h3>Our Annual Flagship Event </h3>
       <p>28 September 2022</p>
       <a href="" className="btn btn-black">Register Now <img src="images/icons/arrow-next.png" alt="" /></a>
     </div>
   </div>
   <div className="col-12 col-md-12 col-lg-8">
     <div className="bgtxtcontainer">
       <div className="row">
         <div className="col-12">
           <div className="bgtxt" >
             <div className="bgtxt-in">
               <h3>LKDF <br /> Forum 2022</h3>
               <p>Digital Skills for an inclusive Future</p>
             </div>                    
           </div>
         </div>
         <div className="col-12 col-md-4">
           <div className="card bgt-card">
             <p>Stories</p>
             <h3>Background Paper for the LKDF Forum 2022</h3>
             <a href="" className='link link-blue'>Discover 
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
               </svg>
             </a>
           </div>
         </div>
         <div className="col-12 col-md-4">
           <div className="card bgt-card">
             <p>Stories</p>
             <h3>Background Paper for the LKDF Forum 2022</h3>
             <a href="" className='link link-blue'>Discover
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
               </svg>
             </a>
           </div>
         </div>
         <div className="col-12 col-md-4">
           <div className="card bgt-card">
             <p>Stories</p>
             <h3>Background Paper for the LKDF Forum 2022</h3>
             <a href="" className='link link-blue'>Discover 
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
               </svg>
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</section>

<section className="abtlkd">
<div className="container">
 <div className="row">
   <div className="col-12 col-md-6">
     <div className="lkdabt">
       <div className="sec-heading">
         <h4>About</h4>
         <h2>LKDF</h2>
         <p>The Learning and Knowledge Development Facility (LKDF) is a platform that promotes industrial skills development among young people in emerging economies. Working with the private sector through Public Private Development Partnerships.</p>
       </div>
       <a href="" className="btn btn-blue">Read More <img src="images/icons/arrow-next.png" alt="" /></a>
     </div>
   </div>
   <div className="col-12 col-md-6">
     <div className="abtimg">
       <img src="images/lkdf-about.png" alt="" />
     </div>
   </div>
 </div>
</div>
</section>

<section className="projects ptb-80">
<div className="container">
 <div className="sec-heading">
   <h2>Projects</h2>
 </div>
 <Swiper
// install Swiper modules
modules={[Navigation,   A11y]}
spaceBetween={30}
slidesPerView={3}
navigation
breakpoints={{
 320: {
   // width: 576,
   slidesPerView: 1,
 },
 768: {
   // width: 768,
   slidesPerView: 3,
 },
}}
>
<SwiperSlide>
 <div className="procard">
   <img src="images/project1.jpg" alt="" />
   <div className="proxtxt">
     <h4>ACCES, Morocco</h4>
     <a href="" className="link link-blue">Discover<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></a>
   </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="procard">
   <img src="images/project2.png" alt="" />
   <div className="proxtxt">
     <h4>Youth Rising, Liberia</h4>
     <a href="" className="link link-blue">Discover<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></a>
   </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="procard">
   <img src="images/project3.jpg" alt="" />
   <div className="proxtxt">
     <h4>H2o Maghreb</h4>
     <a href="" className="link link-blue">Discover<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></a>
   </div>
 </div>
</SwiperSlide>
<SwiperSlide>
 <div className="procard">
   <img src="images/project1.jpg" alt="" />
   <div className="proxtxt">
     <h4>ACCES, Morocco</h4>
   </div>
 </div>
</SwiperSlide>
</Swiper>
<div className="btsecpr text-center">
<a href="" className="btn btn-blue">View All <img src="images/icons/arrow-next.png" alt="" /></a>
</div>
</div>
</section>

<section className="forum ptb-80 bg-light">
<div className="container">
 <div className="d-flex justify-content-between sec-heading">
   <h2>LKDF Forum</h2>
   <a href="" className="btn btn-blue">View All <img src="images/icons/arrow-next.png" alt="" /></a>
 </div>
 <div className="row">
   <div className="col-12 col-md-4">
     <div className="fcard">
       <div className="card-img">
         <img src="images/forum1.png" alt="" />
         <div className="fctxt">
           <h4>Our Annual Flagship Event</h4>
           <p>Are We Ready for a Skills Revolution? </p>
           <p className='fcdt'>19-20 Oct 2022</p>
         </div>
         <div className="upc">
           <p>Upcoming</p>
         </div>
       </div>
       <div className="cbody">
           <h3>LKDF Forum 2022</h3>
           <a href="">Explore 
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
             </svg>
           </a>
       </div>
     </div>
   </div>
   <div className="col-12 col-md-4">
     <div className="fcard">
       <div className="card-img">
         <img src="images/forum2.jpg" alt="" />
         <div className="fctxt">
           <h4>Our Annual Flagship Event</h4>
           <p>Are We Ready for a Skills Revolution? </p>
           <p className='fcdt'>19-20 Oct 2022</p>
         </div>
       </div>
       <div className="cbody">
           <h3>LKDF Forum 2022</h3>
           <a href="">Explore 
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
             </svg>
           </a>
       </div>
     </div>
   </div>
   <div className="col-12 col-md-4">
     <div className="fcard">
       <div className="card-img">
         <img src="images/forum3.jpg" alt="" />
         <div className="fctxt">
           <h4>Our Annual Flagship Event</h4>
           <p>Are We Ready for a Skills Revolution? </p>
           <p className='fcdt'>19-20 Oct 2022</p>
         </div>
       </div>
       <div className="cbody">
           <h3>LKDF Forum 2022</h3>
           <a href="">Explore 
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
             </svg>
           </a>
       </div>
     </div>
   </div>
 </div>
</div>
</section>

<section className="news ptb-80">
<div className="container">
 <div className="d-flex justify-content-between sec-heading">
   <h2>News</h2>
   <a href="" className="btn btn-blue">View All <img src="images/icons/arrow-next.png" alt="" /></a>
 </div>
 <div className="row">
   <div className="col-12 col-md-4">
     <div className="ncard">
       <a href="#">
       <div className="card-img">
         <img src="images/news1.jpg" alt="" />
       </div>
       <div className="cbody">
         <p className='ndt'>August 15, 2022</p>
           <h3>The Formula for Gender Equality: More Women in STEM-fields</h3>
           <p>A global competitiveness perspective of the EU’s industrial R&amp;D investment.</p>                  
       </div>
       </a>
     </div>
   </div>
   <div className="col-12 col-md-4">
     <div className="ncard">
       <a href="">
       <div className="card-img">
         <img src="images/news2.jpg" alt="" />
       </div>
       <div className="cbody">
         <p className='ndt'>August 15, 2022</p>
           <h3>The Formula for Gender Equality: More Women in STEM-fields</h3>
           <p>Advanced digitalization is becoming one of the key drivers of industrial resilience and competitiveness.</p>                  
       </div>
       </a>
     </div>
   </div>
   <div className="col-12 col-md-4">
     <div className="ncard">
       <a href="">
       <div className="card-img">
         <img src="images/news3.jpg" alt="" />
       </div>
       <div className="cbody">
         <p className='ndt'>August 15, 2022</p>
           <h3>The Formula for Gender Equality: More Women in STEM-fields</h3>                  
           <p>Alternatives to industrial policy for semiconductor supply chain resilience.</p>
       </div>
       </a>
     </div>
   </div>
 </div>
</div>
</section>

<section className="video ptb-80 bg-light">
<div className="container">
<div className="d-flex justify-content-between align-items-center sec-heading">
   <h2>Video <br /> Perspectives</h2>
   <div className="midphed">
     <p>Here you can explore the views of students, trainers, donors, private and public sector partners and national counterparts.</p>
   </div>
   <a href="" className="btn btn-blue">View All <img src="images/icons/arrow-next.png" alt="" /></a>
 </div>
 <div className="vidarea">
   <div className="row">
     <div className="col-12 col-md-8">
     <iframe width="100%" height="505" src="https://www.youtube.com/embed/ealm8FUQULs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
     <div className="col-12 col-md-4">
       <div className="vidplst">
       <iframe className='mb-3' width="100%" height="240" src="https://www.youtube.com/embed/FDXeidfTK4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <iframe className='mb-3' width="100%" height="240" src="https://www.youtube.com/embed/y0LrQzc6YGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
     </div>
   </div>
 </div>
</div>
</section>

<section className="tfeed ptb-80">
<div className="container">
 <div className="d-flex justify-content-between align-items-center sec-heading">
   <h2>Tweets from <br /> @ LKDFacility</h2>
   <a href="" className="btn btn-blue">View All <img src="images/icons/arrow-next.png" alt="" /></a>
 </div>
 <div className="row">
   <div className="col-12 col-md-4">
     <div className="tcard">
       <a href="#">
       <div className="card-img">
         <img src="images/tfeed1.jpg" alt="" />
       </div>
       </a>
     </div>
   </div>
   <div className="col-12 col-md-4">
     <div className="tcard">
       <a href="">
       <div className="card-img">
         <img src="images/tfeed2.jpg" alt="" />
       </div>
       </a>
     </div>
   </div>
   <div className="col-12 col-md-4">
     <div className="tcard">
       <a href="">
       <div className="card-img">
         <img src="images/tfeed3.jpg" alt="" />
       </div>
       </a>
     </div>
   </div>
 </div>
</div>
</section>
    </>
  )
}

export default Home;