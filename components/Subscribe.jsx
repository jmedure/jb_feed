import React, { useState } from 'react'
import axios from 'axios'

function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()

    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email })
      setState('Success')
      setEmail('')
    } catch (e) {
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <div className='font-mont'>
      <form onSubmit={subscribe} className="group before:text-neutral-400 after:text-black">
        <div className='flex w-full border-b py-1 border-off border-solid border-neutral-400 justify-between focus:border-neutral-900  after:-["*"] after:border-neutral-900 items-center'>
          <div className="flex flex-auto">
            <input
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="Subscribe for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex w-full focus:focus-none active:none bg-transparent outline-offset-4 py-2 placeholder:text-neutral-400"
            />
          </div>
          <div className="flex">
            <button
              disabled={state === 'Loading'}
              type="submit"
              onClick={subscribe}
              className="py-2  px-3 rounded-full transition-all transition-500ms before:content-[''] before:bg-neutral-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {/* Subscribe */}
                {/* <span className="material-icons text-xl">east</span> */}
                <p className='font-mont capitalize'>subscribe</p>
            </button>
          </div>
        </div>
        {state === 'Error' && (
          <p className="error-stat text-red-500">{errorMsg}</p>
        )}
        {state === 'Success' && (
          <p className='success-state'>Thanks for subscribing &#128153; I&#39;ll let you know the next time I put something into the world.</p>
        )}
      </form>
    </div>
  )
}

export default Subscribe