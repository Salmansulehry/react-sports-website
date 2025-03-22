import React from 'react';

export const ContactUs = () => {
  return (
    <div className="form-container">
      <h2>GET IN TOUCH WITH US</h2>
      <form>
        <div className='form-group'>
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" placeholder="Enter name" required />
        </div>

        <div className='form-group'>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" placeholder="Enter email" required />
        </div>

        
        <div className="form-dropdowns">
          <label htmlFor="country">COUNTRY</label>
          <select id="country">
            <option>USA</option>
            <option>Canada</option>
            <option>UK</option>
            <option>India</option>
          </select>
        </div>
        <div className='form-dropdowns'>
          <label htmlFor="state">STATE</label>
          <select id="state">
            <option>USA</option>
            <option>California</option>
            <option>Texas</option>
            <option>New York</option>
          </select>
        </div>

        <div className='gender-container'>
          <label className="gender-label">GENDER</label>
          <div className="gender-group">
            <div>
              <input type="radio" id="male" name="gender" value="Male" />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="Female" />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" id="other" name="gender" value="Other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>

        <div className="message-container">
          <label htmlFor="message">MESSAGE</label>
          <textarea id="message" placeholder="Message"></textarea>
        </div>
        <div className="button-container">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};
