import React, { useState } from 'react'
import Carousel from '../utils/Carousel';
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

const services = () => {

  return (
    <div >
        <Carousel/>
    </div>
  )
}

export const images=[
    {title:"Frontend Development",img:pic1,subtitle:"Develop the responsive website."},
    {title:"Backend Development",img:pic2,subtitle:"Creating API to intract the website."},
    {title:"FullStack Development",img:pic3,subtitle:"Development both website as well as API."},
    {title:"UI-UX Design",img:pic4,subtitle:"Design the structure or overview of website."},
];
export default services;