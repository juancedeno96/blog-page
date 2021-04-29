import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";

function ContactPage() {
  return (
    <div className="ContactPage">
      <div className="map-sect"></div>
      <div className="contact-sect">
        <ContactItem
          icon={phone}
          text1={"801-592-6824"}
          text2={"801-602-8363"}
        />
      </div>
    </div>
  );
}

export default ContactPage;
