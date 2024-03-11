import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { Button, Label, TextInput, FloatingLabel,Avatar, Blockquote } from 'flowbite-react';
import doggy from '../assets/doggy.png';
function SignUp() {
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
      <p className='text-sm mt-5'>
      <h1 className='text-lg font-bold font-serif'>
        BLOGGY is{' '}
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
      </p>
      </div>
      {/* right */}
      <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
            <Label value='Username' />
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='Email' />
              <TextInput type='text' placeholder='name@company.com' id='email' />
            </div>
            <div>
              <Label value='Password' />
              <TextInput type='text' placeholder='Password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' outline type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
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

export default SignUp

// min-h-screen :  minimum height of the <div> to be equal to the height of the screen.