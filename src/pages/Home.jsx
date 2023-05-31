import React from "react";
import Img from "./macbook-apple-imac-computer-39284.jpeg";
import Footer from "../components/footer.jsx";
import SecondImg from "./pexels-photo-461064.jpeg";
import ThirdImg from "./pexels-photo-1181244.webp";
export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="text-overlay">
          <div>
            <h1>Welcome to CodiTalent</h1>
            <p>Find your dream job today</p>
          </div>
        </div>
      </div>
      <div id="about">
        <div class="cardBox">
          <div class="card">
            <div class="h4">
              <img src={SecondImg} alt="" />
            </div>

            <div class="content">
              <div class="h3">How's it goin alumnis ?</div>
              <p>
                This is CodiTalent, your tech website!!!Lets make this world a
                better place for all of us. Keep prospering...Keep learning!!!
              </p>
            </div>
          </div>
        </div>
        <div class="cardBox">
          <div class="card">
            <div class="h4">
              <img src={ThirdImg} alt="" />
            </div>

            <div class="content">
              <div class="h3">What you can do here ?</div>
              <p>Here you can make your proffessional profile</p>
            </div>
          </div>
        </div>
        <div class="cardBox">
          <div class="card">
            <div class="h4">
              <img src={Img} alt="" />
            </div>

            <div class="content">
              <div class="h3">What are you waiting for ?</div>
              <p>Start with editing your profile and make it better </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
