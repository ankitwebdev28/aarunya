import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <h4 className="text-center text-2xl leading-6 text-[#313575] font-extrabold p-2">
        {contact.designation}
      </h4>
      <img className="contact-image" src={contact.image}></img>
      <h4 className="text-center text-2xl leading-6 text-[#313575] font-extrabold  md:pt-4">
        {contact.name}
      </h4>
      <div className="contact-icons">
        <a className="contact-icon" href={contact.linkedin_profile}>
          <LinkedInIcon fontSize="large" />
        </a>
        <a className="contact-icon" href={contact.instagram_profile}>
          <InstagramIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}
export default ContactCard;
