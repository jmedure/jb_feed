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
    <div className="flex-col space-y-2">
      <form
        onSubmit={subscribe}
        className="group flex after:text-black transition-all group"
      >
        <div
          className={`flex justify-between w-full bg-neutral-200 group-focus-within:border-black rounded-lg dark:hover:bg-neutral-600 dark:sm:hover:border-white/20 space-x-3 overflow-hidden dark:bg-neutral-700 dark:group-focus-within:bg-neutral-600 group-hover:bg-neutral-300 group-focus-within:bg-neutral-200 dark:group-focus-within:border-white/90 border-2 transition-all tracking-normal duration-150 group border-black/10 dark:border-white/00 ${
            state === 'Error'
              ? 'border-red-500 dark:border-red-400 dark:hover:border-red-500 dark:group-focus-within:border-red-500'
              : ''
          }`}
        >
          <input
            required
            id="email-input"
            name="email"
            type="email"
            placeholder="ipadparentingrocks97@hotmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow dark:placeholder:text-white/40 p-3 placeholder:text-black/40  text-black dark:group-focus-within:bg-neutral-600 transition-all group-hover:bg-neutral-300 group-focus-within:bg-neutral-200 duration-150 bg-neutral-200 dark:bg-neutral-700 dark:group-hover:bg-neutral-600 dark:text-white outline-none dark:peer-autofill:bg-neutral-100"
          />
          <div>
            <button
              disabled={state === 'Loading'}
              type="submit"
              onClick={subscribe}
              className="relative m-2 border align-middle justify-center text-white dark:text-black dark:after:text-black sm:py-1 px-2 rounded-md group-focus-within:bg-black dark:group-focus-within:bg-white group-hover:bg-black dark:group-hover:bg-white dark:hover:text-black border-black/10 dark:border-white/10 transition-all bg-neutral-700 after:bg-black hover:bg-black dark:bg-white/80 focus:outline-white outline-2 focus-within:bg-black dark:hover:bg-whitedark:hover:text-black "
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
      {state === 'Error' && (
        <p className="error-state text-red-500 dark:text-red-400 bg-red-500/10 dark:bg-red-500/20 py-1 px-3 rounded-lg">
          {errorMsg}.
        </p>
      )}
      {state === 'Success' && (
        <div className="success-state dark:text-green-500/95 text-green-500 bg-green-500/10 dark:bg-green-500/10 py-1 px-3 rounded-lg">
          <p>no way. you actually did it haha. ty ♥️</p>
        </div>
      )}
    </div>
  );
}

export default Subscribe;
