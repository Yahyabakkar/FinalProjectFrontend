import React from "react";
import "./ContactUs.css";
import Navbar from "../components/navbar";
import contactimg from "./contact-us-customer-support-enquiry-hotline-concept.jpg";
export default function ContactUs() {
  return (
    <>
      <div className="contact-img">
        <img src={contactimg} alt="" width={"100%"} />
      </div>
      <div class="contact-form">
        <form className="hakina">
          <label for="name">Name:</label>
          <input type="text" required="" />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required="" />
          <label for="message">Message:</label>
          <textarea id="message" name="message" required=""></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
