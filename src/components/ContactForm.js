import React, {useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
 const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_8s7x7uq',
        'template_vpy67wa',
        event.target,
        process.env.REACT_APP_EMAILJS_USERID
      );
      alert('Email sent successfully:', result.text);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Email sending failed:', error);
    }
  };

  const inputStyles = {
    border: 'none',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
    marginBottom: '10px',
  };
  

  return (
    <>
 
    <h2 className=' text-white primary-gradient'>Contact Now</h2>
     <form onSubmit={handleSubmit} className="container common text-white default_spacing p-5 rounded" style={{ background: 'linear-gradient(to right, rgb(92,141,205),rgb(100 28 171' }}>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="Name" className="form-label">Name*</label>
          <input
            type="text"
            id="Name"
            value={Name}
            name='from_name'
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
            style={inputStyles}
            autoComplete="name"
            placeholder='Name'
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            name='from_email'
            className="form-control"
            style={inputStyles}
            autoComplete="email"
            placeholder='Email Address'
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message*</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          name='message'
          className="form-control"
          rows="5"
          autoComplete="message"
          placeholder='Type your message...'
          style={{ ...inputStyles, ...{ resize: 'none' } }}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  );
};

export default ContactForm;
