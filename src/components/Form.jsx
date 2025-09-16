import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: '',
    contactMethod: 'email',
    website: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    
    if (!formData.fullName.trim()) {
      formErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    
    if (formData.phone && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
    }
    
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } else {
      setErrors(formErrors);
    }
  };

  if (isSubmitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '8px' }}>
        <h2 style={{ color: '#28a745' }}>Thank You!</h2>
        <p>Your message has been received. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1350px', margin: '0 auto', padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>Contact Us</h1>
      <p style={{ color: '#7f8c8d', marginBottom: '25px' }}>Fill out the form below and we'll get back to you as soon as possible.</p>
      
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <label htmlFor="fullName" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50' }}>
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: errors.fullName ? '1px solid #e74c3c' : '1px solid #ddd', 
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
            {errors.fullName && <span style={{ color: '#e74c3c', fontSize: '14px' }}>{errors.fullName}</span>}
          </div>
          
          <div style={{ flex: '1', minWidth: '250px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50' }}>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: errors.email ? '1px solid #e74c3c' : '1px solid #ddd', 
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
            {errors.email && <span style={{ color: '#e74c3c', fontSize: '14px' }}>{errors.email}</span>}
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', color: '#2c3e50' }}>
              Phone Number <span style={{ color: '#7f8c8d', fontSize: '14px' }}>(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: errors.phone ? '1px solid #e74c3c' : '1px solid #ddd', 
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
            {errors.phone && <span style={{ color: '#e74c3c', fontSize: '14px' }}>{errors.phone}</span>}
          </div>
          
          <div style={{ flex: '1', minWidth: '250px' }}>
            <label htmlFor="company" style={{ display: 'block', marginBottom: '8px', color: '#2c3e50' }}>
              Company / Organization Name <span style={{ color: '#7f8c8d', fontSize: '14px' }}>(optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="service" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50' }}>
            Service of Interest *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            style={{ 
              width: '100%', 
              padding: '12px', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          >
            <option value="">Select a service</option>
            <option value="development">Development</option>
            <option value="cloud">Cloud</option>
            <option value="devops">DevOps</option>
            <option value="marketing">Marketing</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50' }}>
            Message / Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{ 
              width: '100%', 
              padding: '12px', 
              border: errors.message ? '1px solid #e74c3c' : '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          ></textarea>
          {errors.message && <span style={{ color: '#e74c3c', fontSize: '14px' }}>{errors.message}</span>}
        </div>
        
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <label htmlFor="budget" style={{ display: 'block', marginBottom: '8px', color: '#2c3e50' }}>
              Budget Range <span style={{ color: '#7f8c8d', fontSize: '14px' }}>(optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            >
              <option value="">Select budget range</option>
              <option value="<$5K">Less than $5K</option>
              <option value="$5K-$20K">$5K – $20K</option>
              <option value="$20K+">$20K+</option>
            </select>
          </div>
          
          <div style={{ flex: '1', minWidth: '250px' }}>
            <label htmlFor="timeline" style={{ display: 'block', marginBottom: '8px', color: '#2c3e50' }}>
              Timeline / Urgency <span style={{ color: '#7f8c8d', fontSize: '14px' }}>(optional)</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            >
              <option value="">Select timeline</option>
              <option value="immediate">Immediate</option>
              <option value="1-3 months">1–3 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <label htmlFor="contactMethod" style={{ display: 'block', marginBottom: '8px', color: '#2c3e50' }}>
              Preferred Contact Method <span style={{ color: '#7f8c8d', fontSize: '14px' }}>(optional)</span>
            </label>
            <select
              id="contactMethod"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
          
          <div style={{ flex: '1', minWidth: '250px' }}>
            <label htmlFor="website" style={{ display: 'block', marginBottom: '8px', color: '#2c3e50' }}>
              Website / LinkedIn <span style={{ color: '#7f8c8d', fontSize: '14px' }}>(optional - if business client)</span>
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://"
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          style={{ 
            background: '#001994ff', 
            color: 'white', 
            border: 'none', 
            padding: '14px 20px', 
            fontSize: '16px', 
            fontWeight: '600', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            width: '100%',
            marginTop: '10px'
          }}
          onMouseOver={(e) => e.target.style.background = '#040070fc'}
          onMouseOut={(e) => e.target.style.background = '#000e6bff'}
        >
          Submit
        </button>
        
        {/* <p style={{ color: '#7f8c8d', fontSize: '14px', marginTop: '15px' }}>
          * indicates a required field
        </p> */}
      </form>
    </div>
  );
};

export default ContactForm;