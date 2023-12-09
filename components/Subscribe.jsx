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
    <div className="flex-col pb-4">
      <form
        onSubmit={subscribe}
        className="group flex after:text-black divide-black transition-all group"
      >
        <div className="flex justify-between w-full border-black/10">
          <input
            required
            id="email-input"
            name="email"
            type="email"
            placeholder="Subscribe for email updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex p-2 w-full bg-neutral-100 border rounded-none border-black/10 rounded-l-lg"
          />

          <button
            disabled={state === 'Loading'}
            type="submit"
            onClick={subscribe}
            className="flex font-jbd font-medium text-white py-4 px-4 sm:py-3 rounded-r-lg group-focus-within:bg-black border-black/10 tracking-tight capitalize transition-all bg-neutral-700 after:bg-black hover:bg-black"
          >
            {/* Subscribe */}
            subscribe
          </button>
        </div>
      </form>
      {state === 'Error' && (
        <p className="error-state text-red-500 pt-2">{errorMsg}.</p>
      )}
      {state === 'Success' && (
        <p className="success-state">
          Thanks for subscribing &#128153; I&#39;ll let you know the next time I
          put something into the world.
        </p>
      )}
    </div>
  );
}

export default Subscribe;
