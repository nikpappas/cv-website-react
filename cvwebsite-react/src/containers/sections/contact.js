import React from "react";
import mailImg from "images/contact/mail.png";
import telImg from "images/contact/tel.png";

export default () => (
  <section className="contact">
    <h1>Contact</h1>
    <ul>
      <li>
        <img src={mailImg} alt="e-Mail"/>nikolaospappa@gmail.com
      <li>
         <img src={telImg} alt="tel"/> 07751718491</li>
      </li>
    </ul>
  </section>
);
