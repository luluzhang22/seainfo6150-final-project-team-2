import React from 'react';

const Contact = () => (
  <html>
  <h1>Contact US</h1>
  <div>
    <label>First Name</label>
    <input type="text"id="fname" name="firstname" placeholder="Your first name.."/>
    <label>Last Name</label>
    <input type="text"id="lname" name="lastname" placeholder="Your last name.."/>
    <label>Email</label>
    <input type="text"id="email" name="email" placeholder="Your email address.."/>
    <label>Subject</label>
    <input type="text"id="subj" name="subject" placeholder="Your subject.."/>
    <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
    <input type="submit"value="Submit"/>
  </div>
  </html>
  
);

export default Contact;
