import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/Title";

function ContactPage() {
  return (
    <div>
      <div className="c-title">
        <Title title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="home"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.7712287745035!2d-111.67843868485582!3d40.10281328259567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874da330f5bc658f%3A0x1f49cde1b27695dc!2s1281%20W%20520%20S%2C%20Spanish%20Fork%2C%20UT%2084660!5e0!3m2!1sen!2sus!4v1620099197764!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"801-592-6824"}
            text2={"801-602-8363"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"cedenojj7@gmail.com"}
            text2={"juantxis0196@hotmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Spanish Fork, UT"}
            text2={"United States"}
            title={"Location"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
