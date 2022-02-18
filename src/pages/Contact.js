import React from "react";
import ContactCSS from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <div className={ContactCSS.content}>
        <div className="title-parent title-home">
          <h1 className="title">Let's talk.</h1>
        </div>
        <div className="title-parent title-home">
          <h3 id="contact-info">
            Get in touch via the form below, or by emailing
            <a href="ayieric7@gmail.com" className={ContactCSS.textColor}>
              ayieric7@gmail.com
            </a>
            .
          </h3>
          <form action="">
            <label for="name" className={ContactCSS.formLabel}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              className={`${ContactCSS.formDisplay}
                ${ContactCSS.formDisplayInput}
                ${ContactCSS.formInput}
               `}
              // className="formDisplay form-display-input formInput"
              placeholder="Enter your name"
            />
            <label for="email" className={ContactCSS.formLabel}>
              Email Address:
            </label>
            <input
              type="text"
              className={`${ContactCSS.formDisplay}
                ${ContactCSS.formDisplayInput}
                ${ContactCSS.formInput}
                ${ContactCSS.inputDisplayOnFocus}
               `}
              placeholder="Enter your email address"
            />
            <label for="message" className={ContactCSS.formLabel}>
              Message:
            </label>
            <textarea
              type="text"
              id="message"
              className={`${ContactCSS.formDisplay}
                ${ContactCSS.formDisplayInput}
                ${ContactCSS.formInput}
                ${ContactCSS.textArea}`}
              placeholder="Enter your message"
            ></textarea>
            <button
              className={`${ContactCSS.formSubmit} ${ContactCSS.formInput}`}
              id="form-submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
