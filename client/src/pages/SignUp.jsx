import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import OAuth from '../components/OAuth';

export default function SignUp() {
  // Properties
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // Methods
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all the fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage('This user is already exist.');
      }
      setLoading(false);
      if (res.ok) navigate('/sign-in');
    } catch (err) {
      setErrorMessage(err.message);
      setLoading(false);
    }
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
            <Button gradientDuoTone='pinkToOrange' type='submit' disabled={ loading }>
              { loading ? (
                <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading...</span>
                </>
              ) : 'Sign Up' }
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
          { errorMessage && (
              <Alert className='mt-5' color='failure'>
                { errorMessage }
              </Alert>
          ) }
        </div>
      </div>
    </div>
  )
}
