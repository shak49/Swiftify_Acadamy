import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'

export default function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = res.json();
      console.log(data);
    } catch (err) {}
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3  max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
        <div className='flex-1'>
          <Link to='/' className='sm-bold dark:text-white text-4xl'>
              <span className='px-2 py-2 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-500 rounded-lg text-white'>Swiftify</span>
              Academy
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can signup with email and password or with google.
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4'  onSubmit={ handleSubmit }>
            <div>
              <Label value='Your username' />
              <TextInput type='text' placeholder='Username' id='username' onChange={ handleChange }/>
            </div>
            <div>
              <Label value='Your email' />
              <TextInput type='text' placeholder='name@company.com' id='email' onChange={ handleChange }/>
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='text' placeholder='Password' id='password' onChange={ handleChange }/>
            </div>
            <Button gradientDuoTone='pinkToOrange' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have and account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
