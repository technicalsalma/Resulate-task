import React from 'react';
import banner from '../../assest/images/banner-img.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">FaceGenie - A Touchless Enterprise grade SaaS for Safety and Compliance</h1>
      <p className="py-6">Our flagship computer vision technology-driven product, FaceGenie is a revolutionary, touchless innovation that is changing how businesses secure and safeguard their people and assets, seamlessly.</p>
      <p className="py-6">Highly relevant in the post-COVID world, our no-contact Attendance Management(AMS), Visitor Management (VMS) and PPE Compliance & Monitoring(PPE), offerings help enforce social distancing and reduce spread of infections while providing impeccable results.</p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  </div>
</div> 
    );
};

export default Banner;