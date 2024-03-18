import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Label, TextInput, FloatingLabel,Avatar, Blockquote, Spinner } from 'flowbite-react';
import doggy from '../assets/doggy.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()}); 
  }

  const handleValidation = () => {
    const { password, email } = formData;
    if (password.length === "") {
      toast.error(
        "Password is required",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(handleValidation()){
      try {
        setLoading(true);
        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          toast.error(`${data.message}`, toastOptions);
          setLoading(false);
          return;
        }
        setLoading(false);
        if(res.ok) {
          navigate('/');
        }
      } catch (error) {
        setLoading(false);
        toast.error(`${error.message}`, toastOptions);
      }
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left */}
      <div className='flex-1 flex-col mx-auto'>
      <Link
        to='/'
        className='font-bold dark:text-white text-4xl mx-auto'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-blue-500 via-pink-500 to-lime-500 rounded-lg text-white'>
          BLO
        </span>
        <span className='px-2 py-1 bg-gradient-to-r from-lime-500 via-pink-500 to-blue-500 rounded-lg text-white'>
          BBY
        </span>
      </Link>
      <div className='text-sm mt-5'>
      <h1 className='text-lg font-bold font-serif'>
        BLOBBY is{' '}
        <span className='font-sans text-purple-600'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Free', 'Trusted', 'Safe', 'Secure', 'Fun', 'Entertaining', 'Life!']}
            loop={true}
            cursor
            cursorStyle='(:'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      </div>
      </div>
      {/* right */}
      <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Email' />
              <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Password' />
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' outline type='submit' disabled={loading}>
            {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}              
            </Button>
          </form>
          <ToastContainer/>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      <figure className="max-w-screen-md text-center">
      <svg
        className="mx-auto mb-3 h-7 w-7 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Blockquote>
        <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
        "I have created this blogging website to gather people of the same belief and provide them with a 
        platform to freely share their thoughts without restrictions. Through this platform, I am promoting 
        the fundamental right of freedom of speech, fostering an environment where individuals can express 
        themselves openly and contribute to meaningful discussions."
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center justify-center space-x-3">
        <Avatar rounded size="xs" img={doggy} alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Hritik G. Anand</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Creator</cite>
        </div>
      </figcaption>
    </figure>
      </div>
    </div>
  )
}
