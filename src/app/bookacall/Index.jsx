'use client';
import { useAppContext } from '@/shared/hooks/ThemeContext';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [investQuestion, setInvestQuestion] = useState(null);
  const element = useRef(null);
  const router = useRouter();
  const _ = useAppContext();

  const handleButtonClick = (value) => {
    setInvestQuestion(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!name.trim()) {
      setNameError('Please enter your name');
      element.current?.scrollIntoView({
        behavior: 'smooth'
      });
      return;
    }

    if (!email.trim()) {
      setEmailError('Please enter a valid email address');
      element.current?.scrollIntoView({
        behavior: 'smooth'
      });
      return;
    }

    // Additional validation for email format (can be expanded)
    if (!isValidEmail(email.trim())) {
      setEmailError('Please enter a valid email address');
      element.current?.scrollIntoView({
        behavior: 'smooth'
      });
      return;
    }

    // If all validations pass, proceed with form submission
    // Clear any existing errors
    setNameError('');
    setEmailError('');

    try {
      // Perform form submission logic here
      const response = await axios.post('/book-a-call', {
        name: name,
        email: email,
        company: company,
        message: message,
        invest_question: investQuestion
      });

      // Check if response status is 'ok'
      if (response.data.status === 'ok') {
        // Redirect to success page
        router.push('/bookacall/received');
      } else {
        // Handle other response statuses or errors
        console.error('Unexpected response status:', response.data.status);
        // Optionally show an error message to the user
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Optionally show an error message to the user
    }
  };

  const isValidEmail = (email) => {
    // Very basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className='bookacall__container'>
      <h2 ref={element} className='bookacall__title'>Book an intro call</h2>
      <h3 className="bookacall__title_2">First, a little about yourself.</h3>
      <div className="bookacall__inputs">
        <label className='bookacall__label'>
          <input 
            type="text" 
            name="name"
            placeholder='Name'
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <p className="bookacall__error">{nameError}</p>}
        </label>
        <label className='bookacall__label'>
          <input 
            type="email" 
            name="email" 
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="bookacall__error">{emailError}</p>}
        </label>
        <label className='bookacall__label'>
          <input 
            type="text" 
            name="company"
            placeholder='Company'
            value={company}
            onChange={handleCompanyChange}
          />
        </label>
      </div>
      <div className='bookacall__comments'>
        <h3 className="bookacall__title_2">Tell us about your business and scope of the project.</h3>
        <label className='bookacall__label'>
          <textarea 
            name="message"
            placeholder='Start typing here...'
            value={message}
            onChange={handleCommentsChange}
          ></textarea>
        </label>
      </div>
      <div className='bookacall__questions'>
        <div className='bookacall__buttons-block'>
          <h3 className="bookacall__title_2">Are you prepared to invest $4k in your visual identity?</h3>
          <div className="bookacall__buttons">
            <button
              type='button'
              className={`bookacall__button button ${investQuestion === 'yes' ? '_active' : ''}`}
              onClick={() => handleButtonClick('yes')}
              onMouseEnter={() => { _.setHoverAnyLink(true) }}
              onMouseLeave={() => { _.setHoverAnyLink(false) }}
            >
              Yes
            </button>
            <button
              className={`bookacall__button button ${investQuestion === 'no' ? '_active' : ''}`}
              onClick={() => handleButtonClick('no')}
              onMouseEnter={() => { _.setHoverAnyLink(true) }}
              onMouseLeave={() => { _.setHoverAnyLink(false) }}
            >
              No
            </button>
          </div>
        </div>
      </div>
      <button
        onMouseEnter={() => { _.setHoverAnyLink(true) }}
        onMouseLeave={() => { _.setHoverAnyLink(false) }}
        onClick={handleSubmit}
        className="bookacall__submit button"
      >
        Book my call
      </button>
    </div>
  );
}
