'use client';
import { useAppContext } from '@/shared/hooks/ThemeContext';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [comments, setComments] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const router = useRouter();
  const _ = useAppContext();

  const handleButtonClick = (value) => {
    setSelectedButton(value);
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
    setComments(e.target.value);
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!name.trim()) {
      setNameError('Please enter your name');
      return;
    }

    if (!email.trim()) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Additional validation for email format (can be expanded)
    if (!isValidEmail(email.trim())) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // If all validations pass, proceed with form submission
    // Clear any existing errors
    setNameError('');
    setEmailError('');

    try {
      // Perform form submission logic here
      await axios.post('http://localhost:3000/send-email', {
        name,
        email,
        company,
        comments
      });

      // Reset selected button state
      setSelectedButton(null);

      // Redirect or show a success message
      router.push('/bookacall/received');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const isValidEmail = (email) => {
    // Very basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className='bookacall__container'>
      <h2 className='bookacall__title'>Book an intro call</h2>
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
            name="comments" 
            placeholder='Start typing here...'
            value={comments}
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
              className={`bookacall__button button ${selectedButton === true ? '_active' : ''}`}
              onClick={() => handleButtonClick(true)}
              onMouseEnter={() => { _.setHoverAnyLink(true) }}
              onMouseLeave={() => { _.setHoverAnyLink(false) }}
            >
              Yes
            </button>
            <button
              className={`bookacall__button button ${selectedButton === false ? '_active' : ''}`}
              onClick={() => handleButtonClick(false)}
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
