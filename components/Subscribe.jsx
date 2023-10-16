import React, { useState } from 'react';
import axios from 'axios';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();

    setState('Loading');

    try {
      const response = await axios.post('/api/subscribe', { email });
      setState('Success');
      setEmail('');
    } catch (e) {
      setErrorMsg(e.response.data.error);
      setState('Error');
    }
  };

  return (
    <div className="">
      <form
        onSubmit={subscribe}
        className="group before:text-neutral-400 after:text-black"
      >
        <div className='flex w-full border-b py-1 border-off border-solid border-neutral-400 justify-between focus:border-neutral-900  after:-["*"] after:border-neutral-900 items-center space-x-4'>
          <div className="flex flex-auto">
            <input
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="Subscribe for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex w-full tracking-tight focus:focus-none active:none bg-transparent outline-offset-4 text-lg placeholder:text-neutral-400"
            />
          </div>
          <div className="flex">
            <button
              disabled={state === 'Loading'}
              type="submit"
              onClick={subscribe}
              className="flex font-jbd text-neutral-500 font-medium p-1 tracking-tighter rounded-full text-lg capitalize transition-all group-hover:text-black"
            >
              {/* Subscribe */}
              subscribe
              {/* <p className="font-medium tracking-tighter capitalize">
                subscribe
              </p> */}
            </button>
          </div>
        </div>
        {state === 'Error' && (
          <p className="error-stat text-red-500 pt-2">{errorMsg}.</p>
        )}
        {state === 'Success' && (
          <p className="success-state">
            Thanks for subscribing &#128153; I&#39;ll let you know the next time
            I put something into the world.
          </p>
        )}
      </form>
    </div>
  );
}

export default Subscribe;
