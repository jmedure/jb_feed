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
    <div className=''>
      <form onSubmit={subscribe} className="group before:gray-400 after:gray-900">
        <div className='flex w-full border-b border-solid border-gray-400 justify-between focus:border-gray-900  after:-["*"] after:border-gray-900 items-baseline'>
          <div className="flex flex-auto">
            <input
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="subscribe for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex w-full focus:focus-none active:none focus:outline-none focus:ring-sky-500"
            />
          </div>
          <div className="flex">
            <button
              disabled={state === 'Loading'}
              type="submit"
              onClick={subscribe}
              className="hover:bg-neutral-200 py-2 px-3  transition-all transition-500ms  before:content-[''] before:gray-200"
              >
                {/* Subscribe */}
                <span className="material-icons text-xl">east</span>
            </button>
          </div>
        </div>
        {state === 'Error' && (
          <p className="error-state">{errorMsg}</p>
        )}
        {state === 'Success' && (
          <p className='success-state'>Thanks for subscribing &#128153; I&#39;ll let you know the next time I put something into the world.</p>
        )}
      </form>
    </div>
  )
}

export default Subscribe