import React from "react";
import "../styles/home.scss";
import pngtree from "../assets/pngtree.png";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>My Blog</h1>
          <p>solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={pngtree} alt="graphics" />

        <div>
          <p>
            we are your one and only solution to the tech problems you face
            every day, whether it be a bug in your code or just needing some
            advice on how to approach a problem. Whether it is a problem with
            your computer, phone or any other electronic device, We have got you
            covered! Our team of experts will be able to assist you in solving
            these issues as quickly as possible. We provide solutions for both
            personal use as well as businesses.
          </p>
        </div>
      </div>

      <div id="about" className="home3">
  <div>
    <h1>who we are ?</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum,
      deleniti possimus expedita ad eius hic sapiente nulla perspiciatis
      consectetur accusamus sunt maxime quod facere voluptas cumque sed ipsam
      minima exercitationem consequuntur neque culpa vero dignissimos!
      Perspiciatis nulla dolore vero labore, obcaecati molestias quam, quidem
      molestiae facere maiores necessitatibus dolorum!
    </p>
  </div>
</div>


<div className="home4" id="brands">
    <div>
        <h1>brands</h1>
        <article>
            <div style={{animationDelay:"0.3s"}}>
                <AiFillAmazonCircle/>
                <p>amazon</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
                <AiFillGoogleCircle/>
                <p>google</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{animationDelay:"1s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
        </article>
    </div>
</div>
    </>
  );
};

export default Home;
