import React, { useState } from 'react'
import logo from './logo.svg'
import css from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={css.App}>
      <header className={css['App-header']}>
        <img src={logo} className={css['App-logo']} alt="logo" />
        <p>Hello Vite + React! from DEMO 2</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={css['App-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={css['App-link']}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
